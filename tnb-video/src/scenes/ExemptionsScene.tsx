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

export const ExemptionsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Exemptions"
      style={{ backgroundColor: "#E9F6EF", fontFamily, direction: "rtl" }}
    >
      <Interactive.Div
        name="Headline"
        style={{
          position: "absolute",
          top: 160,
          left: 80,
          right: 80,
          textAlign: "center",
          color: "#1F6B52",
          fontSize: 84,
          fontWeight: 900,
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        ولكن… كاينة إعفاءات
      </Interactive.Div>

      <Interactive.Div
        name="Permit card"
        style={{
          position: "absolute",
          top: 420,
          left: 80,
          right: 80,
          padding: "40px 44px",
          borderRadius: 32,
          backgroundColor: "#1F6B52",
          color: "#FFFFFF",
          fontSize: 56,
          fontWeight: 700,
          lineHeight: 1.45,
          opacity: interpolate(frame, [0.8 * fps, 1.3 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0.8 * fps, 1.4 * fps], [0.8, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 14 }),
            output: "perceptual-scale",
          }),
        }}
      >
        خديتي رخصة البناء؟
        <div style={{ color: "#E8B04B", fontSize: 72, fontWeight: 900 }}>
          إعفاء مؤقت 3 سنين
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Forbidden card"
        style={{
          position: "absolute",
          top: 870,
          left: 80,
          right: 80,
          padding: "32px 44px",
          borderRadius: 32,
          border: "4px solid #1F6B52",
          color: "#0B3D2E",
          fontSize: 52,
          fontWeight: 700,
          opacity: interpolate(frame, [2.4 * fps, 2.9 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [2.4 * fps, 2.9 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        أرض ممنوع فيها البناء
      </Interactive.Div>

      <Interactive.Div
        name="Utilities card"
        style={{
          position: "absolute",
          top: 1060,
          left: 80,
          right: 80,
          padding: "32px 44px",
          borderRadius: 32,
          border: "4px solid #1F6B52",
          color: "#0B3D2E",
          fontSize: 52,
          fontWeight: 700,
          opacity: interpolate(frame, [3.4 * fps, 3.9 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [3.4 * fps, 3.9 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        أرض ما واصلاش ليها الما والضو
      </Interactive.Div>

      <Caption text="رخصة البناء = إعفاء مؤقت ديال 3 سنين، وكاينين أراضي معفية." />
    </AbsoluteFill>
  );
};
