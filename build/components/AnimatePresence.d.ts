import React, { ReactElement } from "react";
import type { AnimName } from "../key-frames";
export interface IFAnimatePresenceProps {
    /** show / hide */
    show: boolean;
    enter: AnimName;
    exit: AnimName;
    duration?: number;
    children: ReactElement;
}
export declare const AnimatePresence: React.FC<IFAnimatePresenceProps>;
export default AnimatePresence;
