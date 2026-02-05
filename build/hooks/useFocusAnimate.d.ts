import type { AnimName } from "../key-frames";
export declare function useFocusAnimate(options: {
    focus?: AnimName;
    blur?: AnimName;
}): {
    bind: {
        ref: import("react").MutableRefObject<HTMLElement | null>;
        onFocus: () => void | undefined;
        onBlur: () => void | undefined;
    };
    ref: import("react").MutableRefObject<HTMLElement | null>;
    run: (name: AnimName, opts?: import("../animation").IFAnimateRecipeOptions) => void;
    play: (name: AnimName, opts?: import("../animation").IFAnimateRecipeOptions) => void;
    reset: () => void;
    sequence: () => import("../animation").AnimateSequence;
};
