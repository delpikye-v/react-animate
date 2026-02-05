import type { IFAnimateRecipeOptions, TypeTimingKey } from '../animation/types';
import type { AnimName } from '../key-frames';
export interface IFUseRandomIFAnimateOptions {
    enter?: readonly AnimName[];
    exit?: readonly AnimName[];
    lockEnter?: boolean;
    lockExit?: boolean;
}
export interface IFUseAnimateBaseOptions {
    duration?: number | string;
    timing?: TypeTimingKey;
}
export type TypeRunFn = (name: AnimName, options?: IFAnimateRecipeOptions, variant?: string) => void;
