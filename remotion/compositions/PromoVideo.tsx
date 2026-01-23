import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import { SceneIntro } from "../components/SceneIntro";
import { SceneProblem } from "../components/SceneProblem";
import { SceneFramework } from "../components/SceneFramework";
import { SceneCTA } from "../components/SceneCTA";

export const PromoVideo: React.FC = () => {
  // Scene durations in frames (at 30fps)
  const INTRO_DURATION = 180; // 6 seconds
  const PROBLEM_DURATION = 300; // 10 seconds
  const FRAMEWORK_DURATION = 570; // 19 seconds
  const CTA_DURATION = 330; // 11 seconds

  // Transition durations
  const TRANSITION_FRAMES = 30; // 1 second transitions

  return (
    <TransitionSeries>
      {/* Scene 1: Logo Reveal & Intro */}
      <TransitionSeries.Sequence durationInFrames={INTRO_DURATION}>
        <SceneIntro />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
      />

      {/* Scene 2: Problem Statement */}
      <TransitionSeries.Sequence durationInFrames={PROBLEM_DURATION}>
        <SceneProblem />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
      />

      {/* Scene 3: Framework Showcase */}
      <TransitionSeries.Sequence durationInFrames={FRAMEWORK_DURATION}>
        <SceneFramework />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={slide({ direction: "from-bottom" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
      />

      {/* Scene 4: Call to Action */}
      <TransitionSeries.Sequence durationInFrames={CTA_DURATION}>
        <SceneCTA />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
