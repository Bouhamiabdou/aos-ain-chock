import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { fontFamily } from "../theme";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Outro"
      style={{ backgroundColor: "#0B3D2E", fontFamily, direction: "rtl" }}
    >
      <Interactive.Div
        name="Benefits"
        style={{
          position: "absolute",
          top: 260,
          left: 80,
          right: 80,
          textAlign: "center",
          color: "#A8D5C2",
          fontSize: 60,
          fontWeight: 700,
          lineHeight: 1.5,
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        هاد الفلوس كترجع ليك:
        <div style={{ color: "#FFF8EC", fontSize: 76, fontWeight: 900 }}>
          طرقان · ضو · خدمات
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Call to action"
        style={{
          position: "absolute",
          top: 720,
          left: 80,
          right: 80,
          textAlign: "center",
          color: "#E8B04B",
          fontSize: 104,
          fontWeight: 900,
          lineHeight: 1.3,
          opacity: interpolate(frame, [1 * fps, 1.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [1 * fps, 1.7 * fps], [0.7, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 12 }),
            output: "perceptual-scale",
          }),
        }}
      >
        خلّص فالوقت… مدينتك كتستاهل
      </Interactive.Div>

      <Interactive.Div
        name="Contact"
        style={{
          position: "absolute",
          top: 1180,
          left: 80,
          right: 80,
          textAlign: "center",
          color: "#FFF8EC",
          fontSize: 48,
          fontWeight: 700,
          opacity: interpolate(frame, [2 * fps, 2.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        سوّل فمصلحة الجبايات ديال جماعتك
      </Interactive.Div>

      <Interactive.Div
        name="Disclaimer"
        style={{
          position: "absolute",
          bottom: 120,
          left: 80,
          right: 80,
          textAlign: "center",
          color: "#7FB5A0",
          fontSize: 34,
          fontWeight: 400,
          opacity: interpolate(frame, [2 * fps, 2.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        المثال للتوضيح فقط — الأثمنة حسب القرار الجبائي ديال كل جماعة (القانون 47.06 كما تم تغييره بالقانون 14.25)
      </Interactive.Div>
    </AbsoluteFill>
  );
};
