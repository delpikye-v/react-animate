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
export interface IBaseStyledElementProps {
    type?: AnimateType;
    duration?: string;
    timing?: "ease" | "easeIn" | "easeOut" | "easeInOut" | "linear" | "ease-in" | "ease-out" | "ease-in-out";
    delay?: string;
    iteration?: string | number | "infinite";
    direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
    fillMode?: "none" | "forwards" | "backwards" | "both";
}
export interface IAnimationProps extends IBaseStyledElementProps, React.HTMLAttributes<HTMLDivElement> {
    tagName?: "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "section" | "li" | "a" | "p" | "dt" | "strong" | "td" | "th" | "legend" | "caption";
    children?: React.ReactNode | string;
    typingWrite?: IAnimationTypingProps;
    onAnimationEnd?: () => void;
}
