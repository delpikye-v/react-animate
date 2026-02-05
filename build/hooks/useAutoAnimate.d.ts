import type { AnimName } from "../key-frames";
export declare function useAutoAnimate<T extends HTMLElement>(value: any, options: {
    change: AnimName;
}): {
    ref: import("react").MutableRefObject<T | null>;
    run: (name: AnimName, opts?: import("../animation").IFAnimateRecipeOptions) => void;
    play: (name: AnimName, opts?: import("../animation").IFAnimateRecipeOptions) => void;
    reset: () => void;
    sequence: () => import("../animation").AnimateSequence;
};
