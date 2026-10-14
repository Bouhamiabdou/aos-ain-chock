import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Caption } from "../Caption";
import { fontFamily } from "../theme";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Hook"
      style={{ backgroundColor: "#0B3D2E", fontFamily, direction: "rtl" }}
    >
      <Interactive.Div
        name="Question"
        style={{
          position: "absolute",
          top: 200,
          left: 80,
          right: 80,
          color: "#FFF8EC",
          fontSize: 84,
          fontWeight: 900,
          lineHeight: 1.35,
          textAlign: "center",
          opacity: interpolate(frame, [0, 0.6 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 0.6 * fps], ["0px 60px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        عندك شي أرض فالمدينة وما بنيتيهاش؟
      </Interactive.Div>

      <Interactive.Div
        name="Skyline"
        style={{
          position: "absolute",
          top: 700,
          left: 80,
          right: 80,
          height: 420,
          display: "flex",
          alignItems: "flex-end",
          gap: 24,
          direction: "ltr",
          translate: interpolate(frame, [0.3 * fps, 1.2 * fps], ["0px 200px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
          }),
        }}
      >
        <div style={{ flex: 1, height: 360, backgroundColor: "#1F6B52", borderRadius: 12 }} />
        <div style={{ flex: 1, height: 280, backgroundColor: "#2A8A6A", borderRadius: 12 }} />
        <div
          style={{
            flex: 1.6,
            height: 90,
            border: "8px dashed #E8B04B",
            borderRadius: 12,
            backgroundColor: "rgba(232, 176, 75, 0.15)",
          }}
        />
        <div style={{ flex: 1, height: 400, backgroundColor: "#1F6B52", borderRadius: 12 }} />
      </Interactive.Div>

      <Interactive.Div
        name="TNB badge"
        style={{
          position: "absolute",
          top: 1180,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#E8B04B",
          fontSize: 200,
          fontWeight: 900,
          direction: "ltr",
          scale: interpolate(frame, [1.5 * fps, 2.2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 12 }),
            output: "perceptual-scale",
          }),
        }}
      >
        TNB ?
      </Interactive.Div>

      <Caption text="راه عليك ضريبة سميتها TNB!" />
    </AbsoluteFill>
  );
};
