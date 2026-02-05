import type { AnimName } from "../key-frames";
import type { IFAnimateRecipeOptions } from "../animation/types";
import { TypeRunFn } from "./types";
export declare function useRandomAnimateNoRepeat(run: TypeRunFn, pool: readonly AnimName[]): (options?: IFAnimateRecipeOptions) => void;
