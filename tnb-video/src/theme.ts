import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Police Cairo (variable, licence OFL) embarquée dans public/ pour un rendu hors ligne.
export const fontFamily = "Cairo";

loadFont({
  family: fontFamily,
  url: staticFile("Cairo.ttf"),
  weight: "200 1000",
  format: "truetype",
});
