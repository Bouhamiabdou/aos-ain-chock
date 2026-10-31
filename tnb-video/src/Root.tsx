import { Composition, Folder } from "remotion";
import {
  BASE_SCENE_DURATIONS,
  TnbVideo,
  calculateTnbMetadata,
} from "./TnbVideo";
import { HookScene } from "./scenes/HookScene";
import { WhatScene } from "./scenes/WhatScene";
import { CalcScene } from "./scenes/CalcScene";
import { DeadlineScene } from "./scenes/DeadlineScene";
import { RisksScene } from "./scenes/RisksScene";
import { ExemptionsScene } from "./scenes/ExemptionsScene";
import { OutroScene } from "./scenes/OutroScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="TNB-Scenes">
        <Composition
          id="Hook"
          component={HookScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={150}
        />
        <Composition
          id="What"
          component={WhatScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={210}
        />
        <Composition
          id="Calc"
          component={CalcScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={300}
        />
        <Composition
          id="Deadline"
          component={DeadlineScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={150}
        />
        <Composition
          id="Risks"
          component={RisksScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={330}
        />
        <Composition
          id="Exemptions"
          component={ExemptionsScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={210}
        />
        <Composition
          id="Outro"
          component={OutroScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={150}
        />
      </Folder>
      <Composition
        id="TnbVideo"
        component={TnbVideo}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={1500}
        defaultProps={{
          voiceover: true,
          sceneDurations: BASE_SCENE_DURATIONS,
          voiceoverAvailable: BASE_SCENE_DURATIONS.map(() => false),
        }}
        calculateMetadata={calculateTnbMetadata}
      />
    </>
  );
};
