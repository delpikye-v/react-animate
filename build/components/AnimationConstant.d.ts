/// <reference types="react" />
export type AnimateType = "blur" | "bounce" | "effect3D" | "flash" | "float" | "glowing" | "jelly" | "pulse" | "shadow" | "spin" | "swing" | "fadeIn" | "fadeInFromLeft" | "fadeInFromRight" | "fadeInFromTop" | "fadeInFromBottom" | "fadeOut" | "fadeOutToLeft" | "fadeOutToRight" | "fadeOutToTop" | "fadeOutToBottom" | "flip" | "flipIn" | "flipOut" | "flipSlowDown" | "flipFromTop" | "flipToTop" | "flipFromBottom" | "flipToBottom" | "flipFromLeftToCenter" | "fold" | "unfold" | "hangOnLeft" | "hangOnRight" | "rotateSlowDown" | "rotateCW" | "rotateACW" | "shakeMix" | "shakeHorizontal" | "shakeVertical" | "squeezeMix" | "squeezeHorizontal" | "squeezeVertical" | "slideInFromLeft" | "slideInFromRight" | "slideOutToLeft" | "slideOutToRight" | "slideInFromTop" | "slideInFromBottom" | "slideOutToTop" | "slideOutToBottom" | "zoomIn" | "zoomOut" | "popIn" | "popOut" | "typewriter";
export interface ICursorProps {
    cursorColor?: string | null;
}
export interface IAnimationTypingProps extends ICursorProps {
    heading?: string;
    className?: string;
    dataText?: string[];
}
type TIteration = "infinite";
export interface IBaseStyledElementProps {
    type: null | AnimateType;
    duration?: string;
    timing?: "ease" | "easeIn" | "easeOut" | "linear" | "ease-in" | "ease-out" | "ease-in-out";
    delay?: string;
    iteration?: string | number | TIteration;
    direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
    fillMode?: "none" | "forwards" | "backwards" | "both";
}
export interface IAnimationProps extends IBaseStyledElementProps {
    children?: React.ReactNode | string;
    className?: string;
    type: null | AnimateType;
    typingWrite?: IAnimationTypingProps;
}
export {};
