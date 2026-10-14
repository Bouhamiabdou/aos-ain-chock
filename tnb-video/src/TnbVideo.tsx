import { Audio } from "@remotion/media";
import { AbsoluteFill, Sequence, Series, staticFile } from "remotion";
import { HookScene } from "./scenes/HookScene";
import { WhatScene } from "./scenes/WhatScene";
import { CalcScene } from "./scenes/CalcScene";
import { DeadlineScene } from "./scenes/DeadlineScene";
import { RisksScene } from "./scenes/RisksScene";
import { ExemptionsScene } from "./scenes/ExemptionsScene";
import { OutroScene } from "./scenes/OutroScene";

// Voix off : public/voiceover/01.mp3 … 07.mp3, une réplique par scène (voir VOIX-OFF.md).
// Passer voiceover à true une fois les fichiers déposés.
export type TnbVideoProps = {
  voiceover: boolean;
};

export const TnbVideo: React.FC<TnbVideoProps> = ({ voiceover }) => (
  <AbsoluteFill>
    <Series>
      <Series.Sequence name="Hook" durationInFrames={150}>
        <HookScene />
      </Series.Sequence>
      <Series.Sequence name="What" durationInFrames={210}>
        <WhatScene />
      </Series.Sequence>
      <Series.Sequence name="Calc" durationInFrames={300}>
        <CalcScene />
      </Series.Sequence>
      <Series.Sequence name="Deadline" durationInFrames={150}>
        <DeadlineScene />
      </Series.Sequence>
      <Series.Sequence name="Risks" durationInFrames={330}>
        <RisksScene />
      </Series.Sequence>
      <Series.Sequence name="Exemptions" durationInFrames={210}>
        <ExemptionsScene />
      </Series.Sequence>
      <Series.Sequence name="Outro" durationInFrames={150}>
        <OutroScene />
      </Series.Sequence>
    </Series>
    <Audio
      name="Music"
      src={staticFile("music.mp3")}
      volume={voiceover ? 0.15 : 1}
    />
    {voiceover ? (
      <>
        <Sequence name="VO 1" from={9}>
          <Audio src={staticFile("voiceover/01.mp3")} />
        </Sequence>
        <Sequence name="VO 2" from={159}>
          <Audio src={staticFile("voiceover/02.mp3")} />
        </Sequence>
        <Sequence name="VO 3" from={369}>
          <Audio src={staticFile("voiceover/03.mp3")} />
        </Sequence>
        <Sequence name="VO 4" from={669}>
          <Audio src={staticFile("voiceover/04.mp3")} />
        </Sequence>
        <Sequence name="VO 5" from={819}>
          <Audio src={staticFile("voiceover/05.mp3")} />
        </Sequence>
        <Sequence name="VO 6" from={1149}>
          <Audio src={staticFile("voiceover/06.mp3")} />
        </Sequence>
        <Sequence name="VO 7" from={1359}>
          <Audio src={staticFile("voiceover/07.mp3")} />
        </Sequence>
      </>
    ) : null}
  </AbsoluteFill>
);
