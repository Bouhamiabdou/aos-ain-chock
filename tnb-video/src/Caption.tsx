import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";

// Sous-titre de la voix off, affiché en bas de chaque scène.
export const Caption: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Caption"
      style={{
        position: "absolute",
        left: 80,
        right: 80,
        bottom: 140,
        padding: "28px 36px",
        borderRadius: 28,
        backgroundColor: "rgba(0, 0, 0, 0.55)",
        color: "#FFFFFF",
        fontSize: 44,
        lineHeight: 1.5,
        fontWeight: 700,
        textAlign: "center",
        opacity: interpolate(frame, [5, 20], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      {text}
    </Interactive.Div>
  );
};
