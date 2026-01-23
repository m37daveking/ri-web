import { Composition } from "remotion";
import { PromoVideo } from "./compositions/PromoVideo";

export const RemotionRoot = () => {
  return (
    <Composition
      id="RIPromo"
      component={PromoVideo}
      durationInFrames={1350}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{}}
    />
  );
};
