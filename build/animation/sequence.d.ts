import { TypeRunFn } from "../hooks";
import type { AnimName } from "../key-frames";
import type { IFAnimateRecipeOptions } from "./types";
export declare class AnimateSequence {
    private run;
    private chain;
    private currentVariant?;
    constructor(run: TypeRunFn);
    variant(name: string): this;
    animate(name: AnimName, options?: IFAnimateRecipeOptions): this;
    wait(ms: number): this;
    parallel(steps: ((api: {
        animate: (name: AnimName, options?: IFAnimateRecipeOptions) => void;
    }) => void)[], waitAfter?: number): this;
}
