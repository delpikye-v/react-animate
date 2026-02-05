export * from './core';
export * from './components';
export * from './hooks';
export * from './key-frames';
import { defaultDurationMap } from './animation/durations';
export { defaultDurationMap };
export declare const bounceDurations: {
    readonly bounce: "1s";
    readonly bounceIn: "1s";
    readonly bounceOut: "1s";
    readonly bounceElastic: "1.2s";
    readonly bounceJelly: "1.2s";
};
export declare const shakeDurations: {
    readonly shakeMix: "0.8s";
    readonly shakeHorizontal: "0.8s";
    readonly shakeVertical: "0.8s";
    readonly shakeQuick: "0.5s";
};
export declare const fadeDurations: {
    readonly fadeIn: "0.8s";
    readonly fadeOut: "0.8s";
    readonly blurIn: "0.8s";
    readonly blurOut: "0.8s";
};
export declare const typingDurations: {
    readonly typing: "2s";
    readonly typingLoop: "2.5s";
    readonly typeWriter: "3s";
    readonly typeDelete: "1.5s";
};
export declare const defaultEnterDuration: "0.8s";
export declare const defaultExitDuration: "0.8s";
export declare const defaultAttentionDuration: "0.8s";
export declare const defaultLoopDuration: "2s";
export declare const UXDuration: {
    readonly instant: "0.2s";
    readonly fast: "0.5s";
    readonly normal: "0.8s";
    readonly slow: "1.2s";
    readonly dramatic: "2s";
};
import Animate from './components/Animate';
export default Animate;
