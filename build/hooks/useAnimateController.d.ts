import type { AnimName } from '../key-frames';
import type { IFAnimateRecipeOptions } from '../animation/types';
export interface IFUseAnimateControllerOptions {
    initial?: AnimName;
    recipe?: Partial<Record<string, AnimName | ((o?: IFAnimateRecipeOptions) => AnimName)>>;
}
export declare function useAnimateController<T extends HTMLElement>(options?: IFUseAnimateControllerOptions): {
    play: (name?: AnimName, opts?: IFAnimateRecipeOptions) => void;
    recipe: (Record<import("../core/recipe").TypeRecipeKey, (options?: IFAnimateRecipeOptions) => void> & {
        run: (key: import("../core/recipe").TypeRecipeKey, options?: IFAnimateRecipeOptions) => void;
    }) | undefined;
    ref: import("react").MutableRefObject<T | null>;
    run: (name: AnimName, opts?: IFAnimateRecipeOptions) => void;
    reset: () => void;
    sequence: () => import("../animation").AnimateSequence;
};
