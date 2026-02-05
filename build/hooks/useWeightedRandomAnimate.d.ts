import type { AnimName } from "../key-frames";
import type { IFAnimateRecipeOptions } from "../animation/types";
import type { TypeRunFn } from "./types";
interface IFWeightedAnim {
    name: AnimName;
    weight: number;
}
export declare function useWeightedRandomAnimate(run: TypeRunFn, pool: readonly IFWeightedAnim[]): (options?: IFAnimateRecipeOptions) => void;
export {};
