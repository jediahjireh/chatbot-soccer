import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

// define type for confetti function options
interface ConfettiOptions {
  particleCount: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  scalar?: number;
  origin?: { x: number; y: number };
}

// define type for the confetti instance
type ConfettiInstance = (opts: ConfettiOptions) => void;

interface ConfettiProps {
  // control firing confetti
  fireConfetti: boolean;
  particleRatio?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  scalar?: number;
}

export default function Confetti({
  fireConfetti,
  particleRatio = 0.25,
  spread = 30,
  startVelocity = 55,
  decay = 0.9,
  scalar = 0.8,
}: ConfettiProps) {
  const refAnimationInstance = useRef<ConfettiInstance | null>(null);

  // get the confetti instance
  const getInstance = useCallback(
    (instance: { confetti: ConfettiInstance } | null) => {
      if (instance) {
        refAnimationInstance.current = instance.confetti;
      }
    },
    []
  );

  // create a confetti shot
  const makeShot = useCallback(
    (particleRatio: number, opts: Omit<ConfettiOptions, "particleCount">) => {
      if (refAnimationInstance.current) {
        refAnimationInstance.current({
          ...opts,
          origin: { x: 0.5, y: 0.3 },
          particleCount: Math.floor(200 * particleRatio),
        });
      }
    },
    []
  );

  // fire the confetti
  useEffect(() => {
    if (fireConfetti) {
      makeShot(particleRatio, {
        spread,
        startVelocity,
        decay,
        scalar,
      });
    }
  }, [
    fireConfetti,
    makeShot,
    particleRatio,
    spread,
    startVelocity,
    decay,
    scalar,
  ]);

  return (
    <ReactCanvasConfetti
      onInit={getInstance}
      style={{
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    />
  );
}
