import type { AnimName } from "../key-frames";
import type { IFAnimateRecipeOptions } from "../animation/types";
export declare function useRandomAnimate(run: (name: AnimName, o?: IFAnimateRecipeOptions) => void, pool: readonly AnimName[]): (options?: IFAnimateRecipeOptions) => void;
