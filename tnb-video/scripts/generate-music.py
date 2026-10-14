"""Génère la musique de fond de la vidéo TNB (50 s, 100 BPM).

Composition originale synthétisée, donc libre de droits : nappe en la mineur
avec une couleur hijaz (accord de mi majeur), arpège pincé façon qanun
et percussion légère façon darbouka (dum / tek).

Usage : python3 scripts/generate-music.py public/music.wav
"""

import sys
import wave

import numpy as np

SR = 44100
BPM = 100
DURATION = 50.0
BEAT = 60 / BPM
BAR = 4 * BEAT

rng = np.random.default_rng(7)
n = int(SR * DURATION)
t = np.arange(n) / SR


def midi(note):
    return 440.0 * 2 ** ((note - 69) / 12)


# Progression sur 2 mesures par accord : Am – Dm – E (hijaz) – Am
CHORDS = [
    [57, 60, 64],  # A C E
    [50, 57, 62, 65],  # D A D F
    [52, 56, 59, 64],  # E G# B E
    [57, 60, 64, 69],  # A C E A
]


def chord_at(time):
    return CHORDS[int(time // (2 * BAR)) % len(CHORDS)]


def pad():
    out = np.zeros(n)
    seg = int(2 * BAR * SR)
    for start in range(0, n, seg):
        end = min(start + seg, n)
        tt = t[start:end] - t[start]
        env = np.minimum(1, tt / 0.8) * np.minimum(1, (tt[-1] - tt + 1e-3) / 0.6)
        for note in chord_at(t[start]):
            f = midi(note - 12)
            for h, a in ((1, 1.0), (2, 0.35), (3, 0.15)):
                for detune in (-0.15, 0.15):
                    out[start:end] += a * env * np.sin(2 * np.pi * (f * h + detune) * tt)
    return out / np.max(np.abs(out))


def pluck(freq, length):
    """Corde pincée (Karplus-Strong)."""
    period = int(SR / freq)
    buf = rng.uniform(-1, 1, period)
    out = np.empty(length)
    for i in range(length):
        out[i] = buf[i % period]
        buf[i % period] = 0.996 * 0.5 * (buf[i % period] + buf[(i + 1) % period])
    return out


def arpeggio():
    out = np.zeros(n)
    step = BEAT / 2
    length = int(0.9 * SR)
    k = 0
    time = 4 * BAR  # l'arpège entre après l'accroche
    while time < DURATION - 2 * BAR:
        notes = chord_at(time)
        note = notes[k % len(notes)] + 12
        i = int(time * SR)
        seg = pluck(midi(note), min(length, n - i))
        out[i : i + len(seg)] += seg * (0.8 if k % 4 == 0 else 0.55)
        k += 1
        time += step
    return out / (np.max(np.abs(out)) + 1e-9)


def percussion():
    out = np.zeros(n)
    dum_len = int(0.35 * SR)
    tek_len = int(0.08 * SR)
    td = np.arange(dum_len) / SR
    dum = np.sin(2 * np.pi * (60 + 60 * np.exp(-td * 25)) * td) * np.exp(-td * 9)
    noise = rng.uniform(-1, 1, tek_len)
    tek = np.diff(noise, prepend=0) * np.exp(-np.arange(tek_len) / SR * 60)
    time = 2 * BAR
    beat = 0
    while time < DURATION - BAR:
        i = int(time * SR)
        pos = beat % 8  # motif sur 2 temps de croche : dum . tek tek dum . tek .
        if pos in (0, 4):
            seg = dum[: n - i]
            out[i : i + len(seg)] += seg
        elif pos in (2, 3, 6):
            seg = tek[: n - i]
            out[i : i + len(seg)] += 0.35 * seg
        beat += 1
        time += BEAT / 2
    return out / (np.max(np.abs(out)) + 1e-9)


mix = 0.45 * pad() + 0.30 * arpeggio() + 0.35 * percussion()
fade = np.minimum(1, t / 1.5) * np.minimum(1, (DURATION - t) / 3.0)
mix *= fade
mix = 0.7 * mix / np.max(np.abs(mix))

with wave.open(sys.argv[1], "wb") as w:
    w.setnchannels(1)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes((mix * 32767).astype(np.int16).tobytes())
