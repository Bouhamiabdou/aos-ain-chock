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

export const DeadlineScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Deadline"
      style={{
        backgroundColor: "#FFF8EC",
        fontFamily,
        direction: "rtl",
        alignItems: "center",
      }}
    >
      <Interactive.Div
        name="Headline"
        style={{
          position: "absolute",
          top: 200,
          left: 80,
          right: 80,
          textAlign: "center",
          color: "#0B3D2E",
          fontSize: 84,
          fontWeight: 900,
          lineHeight: 1.3,
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        صرّح وخلّص قبل
      </Interactive.Div>

      <Interactive.Div
        name="Calendar"
        style={{
          position: "absolute",
          top: 460,
          width: 620,
          borderRadius: 40,
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 30px 60px rgba(11, 61, 46, 0.25)",
          textAlign: "center",
          scale: interpolate(frame, [0.4 * fps, 1.1 * fps], [0.5, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 12 }),
            output: "perceptual-scale",
          }),
          rotate: interpolate(frame, [0.4 * fps, 1.1 * fps], ["-8deg", "0deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 12 }),
          }),
        }}
      >
        <div
          style={{
            backgroundColor: "#C8102E",
            color: "#FFFFFF",
            fontSize: 72,
            fontWeight: 900,
            padding: "24px 0",
          }}
        >
          مارس
        </div>
        <div
          style={{
            color: "#0B3D2E",
            fontSize: 280,
            fontWeight: 900,
            lineHeight: 1.2,
          }}
        >
          1
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Subline"
        style={{
          position: "absolute",
          top: 1150,
          left: 80,
          right: 80,
          textAlign: "center",
          color: "#C8102E",
          fontSize: 60,
          fontWeight: 700,
          opacity: interpolate(frame, [1.5 * fps, 2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        من كل عام
      </Interactive.Div>

      <Caption text="خاصك تصرّح وتخلّص قبل فاتح مارس من كل عام." />
    </AbsoluteFill>
  );
};
