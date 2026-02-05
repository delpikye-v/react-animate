import type { AnimName } from "../key-frames";
import { AnimateSequence, IFAnimateRecipeOptions } from "../animation";
export declare function useAnimate<T extends HTMLElement>(): {
    ref: import("react").MutableRefObject<T | null>;
    run: (name: AnimName, opts?: IFAnimateRecipeOptions) => void;
    play: (name: AnimName, opts?: IFAnimateRecipeOptions) => void;
    reset: () => void;
    sequence: () => AnimateSequence;
};
