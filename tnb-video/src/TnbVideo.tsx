import { Audio } from "@remotion/media";
import {
  AbsoluteFill,
  CalculateMetadataFunction,
  interpolate,
  Sequence,
  Series,
  staticFile,
  useVideoConfig,
} from "remotion";
import { getAudioDuration } from "./audio-duration";
import { HookScene } from "./scenes/HookScene";
import { WhatScene } from "./scenes/WhatScene";
import { CalcScene } from "./scenes/CalcScene";
import { DeadlineScene } from "./scenes/DeadlineScene";
import { RisksScene } from "./scenes/RisksScene";
import { ExemptionsScene } from "./scenes/ExemptionsScene";
import { OutroScene } from "./scenes/OutroScene";

// Voix off : public/voiceover/01.mp3 … 07.mp3, une réplique par scène (voir VOIX-OFF.md).
// Avec voiceover à true, chaque scène s'allonge pour contenir sa réplique.
export const FPS = 30;

// Durée minimale de chaque scène (en images), celle de la version sans voix.
export const BASE_SCENE_DURATIONS = [150, 210, 300, 150, 330, 210, 150];

// La réplique démarre 0,3 s après le début de la scène et laisse 0,7 s de respiration.
export const VO_LEAD_IN = 9;
const VO_TAIL = 21;

export const voiceoverFile = (index: number) =>
  `voiceover/${String(index + 1).padStart(2, "0")}.mp3`;

export type TnbVideoProps = {
  voiceover: boolean;
  sceneDurations: number[];
  // Scènes dont la réplique existe (les fichiers manquants sont ignorés).
  voiceoverAvailable: boolean[];
};

export const calculateTnbMetadata: CalculateMetadataFunction<
  TnbVideoProps
> = async ({ props }) => {
  if (!props.voiceover) {
    return {
      durationInFrames: BASE_SCENE_DURATIONS.reduce((a, b) => a + b, 0),
      props: {
        ...props,
        sceneDurations: BASE_SCENE_DURATIONS,
        voiceoverAvailable: BASE_SCENE_DURATIONS.map(() => false),
      },
    };
  }

  const durations = await Promise.all(
    BASE_SCENE_DURATIONS.map((_, i) =>
      getAudioDuration(staticFile(voiceoverFile(i))),
    ),
  );
  const sceneDurations = BASE_SCENE_DURATIONS.map((base, i) => {
    const seconds = durations[i];
    if (seconds === null) {
      return base;
    }
    return Math.max(base, Math.ceil(seconds * FPS) + VO_LEAD_IN + VO_TAIL);
  });

  return {
    durationInFrames: sceneDurations.reduce((a, b) => a + b, 0),
    props: {
      ...props,
      sceneDurations,
      voiceoverAvailable: durations.map((d) => d !== null),
    },
  };
};

const SCENES = [
  { name: "Hook", Component: HookScene },
  { name: "What", Component: WhatScene },
  { name: "Calc", Component: CalcScene },
  { name: "Deadline", Component: DeadlineScene },
  { name: "Risks", Component: RisksScene },
  { name: "Exemptions", Component: ExemptionsScene },
  { name: "Outro", Component: OutroScene },
];

export const TnbVideo: React.FC<TnbVideoProps> = ({
  voiceover,
  sceneDurations,
  voiceoverAvailable,
}) => {
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill>
      <Series>
        {SCENES.map(({ name, Component }, i) => (
          <Series.Sequence
            key={name}
            name={name}
            durationInFrames={sceneDurations[i]}
          >
            <Component />
            {voiceover && voiceoverAvailable[i] ? (
              <Sequence name={`VO ${i + 1}`} from={VO_LEAD_IN}>
                <Audio src={staticFile(voiceoverFile(i))} volume={0.95} />
              </Sequence>
            ) : null}
          </Series.Sequence>
        ))}
      </Series>
      <Audio
        name="Music"
        src={staticFile("music.mp3")}
        volume={(f) =>
          (voiceover ? 0.15 : 1) *
          interpolate(f, [durationInFrames - 60, durationInFrames], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
        }
      />
    </AbsoluteFill>
  );
};
