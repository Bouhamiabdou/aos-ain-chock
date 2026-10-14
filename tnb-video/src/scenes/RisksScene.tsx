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

export const RisksScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Risks"
      style={{ backgroundColor: "#3A0A12", fontFamily, direction: "rtl" }}
    >
      <Interactive.Div
        name="Headline"
        style={{
          position: "absolute",
          top: 140,
          left: 80,
          right: 80,
          textAlign: "center",
          color: "#FFFFFF",
          fontSize: 96,
          fontWeight: 900,
          scale: interpolate(frame, [0, 0.6 * fps], [1.3, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 14 }),
            output: "perceptual-scale",
          }),
        }}
      >
        إلا ما خلصتيش؟
      </Interactive.Div>

      <Interactive.Div
        name="Penalty 10"
        style={{
          position: "absolute",
          top: 360,
          left: 80,
          right: 80,
          padding: "26px 40px",
          borderRadius: 28,
          backgroundColor: "#C8102E",
          color: "#FFFFFF",
          fontSize: 56,
          fontWeight: 700,
          opacity: interpolate(frame, [1 * fps, 1.4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [1 * fps, 1.4 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        ذعيرة 10%
      </Interactive.Div>

      <Interactive.Div
        name="Surcharge 5"
        style={{
          position: "absolute",
          top: 540,
          left: 80,
          right: 80,
          padding: "26px 40px",
          borderRadius: 28,
          backgroundColor: "#C8102E",
          color: "#FFFFFF",
          fontSize: 56,
          fontWeight: 700,
          opacity: interpolate(frame, [2 * fps, 2.4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [2 * fps, 2.4 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        + 5% فالشهر الأول
      </Interactive.Div>

      <Interactive.Div
        name="Surcharge monthly"
        style={{
          position: "absolute",
          top: 720,
          left: 80,
          right: 80,
          padding: "26px 40px",
          borderRadius: 28,
          backgroundColor: "#C8102E",
          color: "#FFFFFF",
          fontSize: 56,
          fontWeight: 700,
          opacity: interpolate(frame, [3 * fps, 3.4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [3 * fps, 3.4 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        + 0,5% على كل شهر من بعد
      </Interactive.Div>

      <Interactive.Div
        name="Seizure"
        style={{
          position: "absolute",
          top: 900,
          left: 80,
          right: 80,
          padding: "26px 40px",
          borderRadius: 28,
          border: "4px solid #FF6B7A",
          color: "#FFFFFF",
          fontSize: 56,
          fontWeight: 700,
          opacity: interpolate(frame, [4.5 * fps, 4.9 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [4.5 * fps, 4.9 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        حجز على الحساب ولا الممتلكات
      </Interactive.Div>

      <Interactive.Div
        name="Sale blocked"
        style={{
          position: "absolute",
          top: 1080,
          left: 80,
          right: 80,
          padding: "26px 40px",
          borderRadius: 28,
          border: "4px solid #FF6B7A",
          color: "#FFFFFF",
          fontSize: 56,
          fontWeight: 700,
          lineHeight: 1.4,
          opacity: interpolate(frame, [6 * fps, 6.4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [6 * fps, 6.4 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        ما تقدرش تبيع الأرض بلا شهادة الأداء
      </Interactive.Div>

      <Caption text="ذعائر كتزاد كل شهر، حجز، وبلوكاج البيع عند الموثق ولا العدول." />
    </AbsoluteFill>
  );
};
