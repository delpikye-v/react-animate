import type { AnimName } from "../key-frames";
import type { IFAnimateRecipeOptions, TypeAnimateRecipeResolver } from "../animation/types";
export type TypeRecipeKey = "idle" | "enter" | "exit" | "loading" | "success" | "error" | "attention";
export type TypeRecipeConfig = Partial<Record<TypeRecipeKey, TypeAnimateRecipeResolver>>;
export declare function createRecipe(run: (name: AnimName, options?: IFAnimateRecipeOptions) => void, config: TypeRecipeConfig): Record<TypeRecipeKey, (options?: IFAnimateRecipeOptions) => void> & {
    run: (key: TypeRecipeKey, options?: IFAnimateRecipeOptions) => void;
};
