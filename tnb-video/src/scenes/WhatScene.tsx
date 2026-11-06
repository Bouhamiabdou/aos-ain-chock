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

export const WhatScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="What"
      style={{ backgroundColor: "#FFF8EC", fontFamily, direction: "rtl" }}
    >
      <Interactive.Div
        name="Label"
        style={{
          position: "absolute",
          top: 160,
          left: 80,
          right: 80,
          textAlign: "center",
          color: "#1F6B52",
          fontSize: 56,
          fontWeight: 700,
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        شنو هي الـTNB؟
      </Interactive.Div>

      <Interactive.Div
        name="Definition"
        style={{
          position: "absolute",
          top: 270,
          left: 80,
          right: 80,
          textAlign: "center",
          color: "#0B3D2E",
          fontSize: 88,
          fontWeight: 900,
          lineHeight: 1.3,
          opacity: interpolate(frame, [0.3 * fps, 1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0.3 * fps, 1 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        الرسم على الأراضي الحضرية غير المبنية
      </Interactive.Div>

      <Interactive.Div
        name="Card commune"
        style={{
          position: "absolute",
          top: 680,
          left: 80,
          right: 80,
          padding: "36px 48px",
          borderRadius: 32,
          backgroundColor: "#0B3D2E",
          color: "#FFF8EC",
          fontSize: 56,
          fontWeight: 700,
          opacity: interpolate(frame, [1.5 * fps, 2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [1.5 * fps, 2 * fps], ["-120px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
          }),
        }}
      >
        1 — كتخلصو للجماعة
      </Interactive.Div>

      <Interactive.Div
        name="Card annual"
        style={{
          position: "absolute",
          top: 880,
          left: 80,
          right: 80,
          padding: "36px 48px",
          borderRadius: 32,
          backgroundColor: "#0B3D2E",
          color: "#FFF8EC",
          fontSize: 56,
          fontWeight: 700,
          opacity: interpolate(frame, [2.3 * fps, 2.8 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [2.3 * fps, 2.8 * fps], ["-120px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
          }),
        }}
      >
        2 — كل عام
      </Interactive.Div>

      <Interactive.Div
        name="Card perimeter"
        style={{
          position: "absolute",
          top: 1080,
          left: 80,
          right: 80,
          padding: "36px 48px",
          borderRadius: 32,
          backgroundColor: "#E8B04B",
          color: "#0B3D2E",
          fontSize: 56,
          fontWeight: 700,
          opacity: interpolate(frame, [3.1 * fps, 3.6 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [3.1 * fps, 3.6 * fps], ["-120px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
          }),
        }}
      >
        3 — أرض عريانة داخل المدار الحضري
      </Interactive.Div>

      <Caption text="كتخلصو للجماعة كل عام، على كل أرض عريانة داخل المدار الحضري." />
    </AbsoluteFill>
  );
};
