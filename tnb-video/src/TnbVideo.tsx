import { Series } from "remotion";
import { HookScene } from "./scenes/HookScene";
import { WhatScene } from "./scenes/WhatScene";
import { CalcScene } from "./scenes/CalcScene";
import { DeadlineScene } from "./scenes/DeadlineScene";
import { RisksScene } from "./scenes/RisksScene";
import { ExemptionsScene } from "./scenes/ExemptionsScene";
import { OutroScene } from "./scenes/OutroScene";

export const TnbVideo: React.FC = () => (
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
);
