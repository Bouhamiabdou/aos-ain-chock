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

export const CalcScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Compteur animé du montant de l'exemple (200 m² × 10 DH).
  const amount = Math.round(
    interpolate(frame, [5 * fps, 6.5 * fps], [0, 2000], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    }),
  );

  return (
    <AbsoluteFill
      name="Calc"
      style={{ backgroundColor: "#0B3D2E", fontFamily, direction: "rtl" }}
    >
      <Interactive.Div
        name="Title"
        style={{
          position: "absolute",
          top: 160,
          left: 80,
          right: 80,
          textAlign: "center",
          color: "#E8B04B",
          fontSize: 96,
          fontWeight: 900,
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        كيفاش كتحسب؟
      </Interactive.Div>

      <Interactive.Div
        name="Formula"
        style={{
          position: "absolute",
          top: 360,
          left: 80,
          right: 80,
          padding: "40px 32px",
          borderRadius: 32,
          border: "4px solid #E8B04B",
          textAlign: "center",
          color: "#FFF8EC",
          fontSize: 60,
          fontWeight: 700,
          lineHeight: 1.6,
          opacity: interpolate(frame, [0.6 * fps, 1.2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0.6 * fps, 1.2 * fps], [0.85, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
        }}
      >
        المساحة (م²) × ثمن المتر
        <br />= الرسم ديال العام
      </Interactive.Div>

      <Interactive.Div
        name="Rate note"
        style={{
          position: "absolute",
          top: 700,
          left: 80,
          right: 80,
          textAlign: "center",
          color: "#A8D5C2",
          fontSize: 44,
          fontWeight: 400,
          opacity: interpolate(frame, [1.5 * fps, 2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        ثمن المتر كتحددو الجماعة حسب المنطقة
      </Interactive.Div>

      <Interactive.Div
        name="Example"
        style={{
          position: "absolute",
          top: 860,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "center",
          gap: 28,
          direction: "ltr",
          color: "#FFF8EC",
          fontSize: 84,
          fontWeight: 900,
          opacity: interpolate(frame, [3 * fps, 3.6 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [3 * fps, 3.6 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <span>200 m²</span>
        <span style={{ color: "#E8B04B" }}>×</span>
        <span>10 DH</span>
      </Interactive.Div>

      <Interactive.Div
        name="Result"
        style={{
          position: "absolute",
          top: 1040,
          left: 80,
          right: 80,
          padding: "32px 0",
          borderRadius: 32,
          backgroundColor: "#E8B04B",
          textAlign: "center",
          color: "#0B3D2E",
          fontSize: 100,
          fontWeight: 900,
          whiteSpace: "nowrap",
          opacity: interpolate(frame, [4.6 * fps, 5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [4.6 * fps, 5.2 * fps], [0.6, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 14 }),
            output: "perceptual-scale",
          }),
        }}
      >
        {amount} درهم فالعام
      </Interactive.Div>

      <Caption text="مثلا: 200 متر × 10 دراهم = 2000 درهم فالعام." />
    </AbsoluteFill>
  );
};
