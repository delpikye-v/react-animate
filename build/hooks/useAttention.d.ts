export declare function useAttention<T extends HTMLElement>(): {
    success: () => void;
    error: () => void;
    loading: () => void;
    warning: () => void;
    ref: import("react").MutableRefObject<T | null>;
    run: (name: import("..").AnimName, opts?: import("../animation").IFAnimateRecipeOptions) => void;
    play: (name: import("..").AnimName, opts?: import("../animation").IFAnimateRecipeOptions) => void;
    reset: () => void;
    sequence: () => import("../animation").AnimateSequence;
};
