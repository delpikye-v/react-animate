import type React from "react";
import type { AnimName } from "../key-frames";
import type { IFAnimateRecipeOptions } from "../animation/types";
type Target = HTMLElement | null | undefined | React.RefObject<HTMLElement>;
export declare function animate(target?: Target): {
    run: (name: AnimName, opts?: IFAnimateRecipeOptions) => void;
    stop: () => void;
};
export {};
