import React from "react";
import type { AnimName } from "../key-frames";
export interface IFAnimateGroupProps {
    type: AnimName;
    stagger?: number;
    children: React.ReactNode;
    className?: string;
}
export declare const AnimateGroup: React.FC<IFAnimateGroupProps>;
