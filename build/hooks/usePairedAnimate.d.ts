import { AnimName } from "../key-frames";
export declare function usePairedAnimate<T extends HTMLElement>(options: {
    enter: AnimName;
    leave: AnimName;
    visibleDuration?: number;
}): {
    ref: import("react").MutableRefObject<T | null>;
    show: () => void;
    play: (name: AnimName, opts?: import("../animation").IFAnimateRecipeOptions) => void;
};
