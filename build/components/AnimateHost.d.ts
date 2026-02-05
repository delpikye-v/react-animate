import React, { ElementType } from "react";
import type { IFAnimateProps } from "../animation/types";
export interface IFAnimateHostProps<T extends ElementType = "div"> extends Omit<IFAnimateProps, "children"> {
    as?: T;
    children: React.ReactNode;
}
export declare const AnimateHost: React.ForwardRefExoticComponent<IFAnimateHostProps<"div"> & React.RefAttributes<HTMLElement>>;
export default AnimateHost;
