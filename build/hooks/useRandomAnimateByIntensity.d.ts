import type { AnimName } from "../key-frames";
import type { IFAnimateRecipeOptions, TypeAnimationIntensity } from "../animation/types";
import { TypeRunFn } from "./types";
type TypeIntensityPool = Record<TypeAnimationIntensity, readonly AnimName[]>;
export declare function useRandomAnimateByIntensity(run: TypeRunFn, pool: TypeIntensityPool): (options?: IFAnimateRecipeOptions) => void;
export {};
