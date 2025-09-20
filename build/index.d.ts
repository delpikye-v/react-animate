import Animate from "./AnimBox";
import AnimateTyping, { type IFAnimateTypingProps } from "./AnimBox/AnimateTyping";
import { defaultDurationMap } from "./AnimBox/durations";
import { animGroups, animNames } from "./AnimBox/frames";
import { WrapperAnimate } from "./AnimBox/WrapperAnimate";
import type { IFAnimateProps, TimingKeyType } from "./AnimBox/types";
export { animNames, animGroups, AnimateTyping, defaultDurationMap as defaultDuration, WrapperAnimate };
export type { IFAnimateProps, IFAnimateTypingProps, TimingKeyType };
export default Animate;
