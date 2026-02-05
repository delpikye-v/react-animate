import type { AnimName } from "../key-frames";
export type RecipeState = "idle" | "loading" | "success" | "error" | "warning";
export declare function useRecipe(options?: {
    map?: Partial<Record<RecipeState, AnimName>>;
    autoReset?: boolean;
    resetDelay?: number;
}): {
    play: (state: RecipeState) => void;
    ref: import("react").MutableRefObject<HTMLElement | null>;
    run: (name: AnimName, opts?: import("../animation").IFAnimateRecipeOptions) => void;
    reset: () => void;
    sequence: () => import("../animation").AnimateSequence;
};
