import type { AnimName } from "../key-frames";
export declare function useHoverAnimate(options: {
    enter?: AnimName;
    leave?: AnimName;
}): {
    bind: {
        ref: import("react").MutableRefObject<HTMLElement | null>;
        onMouseEnter: () => void | undefined;
        onMouseLeave: () => void | undefined;
    };
    ref: import("react").MutableRefObject<HTMLElement | null>;
    run: (name: AnimName, opts?: import("../animation").IFAnimateRecipeOptions) => void;
    play: (name: AnimName, opts?: import("../animation").IFAnimateRecipeOptions) => void;
    reset: () => void;
    sequence: () => import("../animation").AnimateSequence;
};
