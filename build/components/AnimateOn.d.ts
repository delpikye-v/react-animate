import React, { ReactElement } from "react";
import type { IFAnimateRecipeOptions } from "../animation/types";
import type { AnimName } from "../key-frames";
export interface IFAnimateOnProps<T = any> {
    when: T;
    value?: T;
    anim: AnimName | AnimName[];
    options?: IFAnimateRecipeOptions;
    children: ReactElement;
}
export declare function AnimateOn<T>({ when, value, anim, options, children, }: IFAnimateOnProps<T>): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export default AnimateOn;
