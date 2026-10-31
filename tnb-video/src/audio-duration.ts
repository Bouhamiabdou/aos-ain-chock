import { ALL_FORMATS, Input, UrlSource } from "mediabunny";

// Durée d'un fichier audio en secondes, ou null s'il est absent ou illisible.
export const getAudioDuration = async (src: string): Promise<number | null> => {
  try {
    const input = new Input({
      formats: ALL_FORMATS,
      source: new UrlSource(src),
    });
    return await input.computeDuration();
  } catch {
    return null;
  }
};
