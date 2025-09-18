/// <reference types="react" />
import type { AnimateType } from './frames';
export declare const timingMap: {
    readonly linear: "linear";
    readonly ease: "ease";
    readonly easeIn: "ease-in";
    readonly 'ease-in': "ease-in";
    readonly easeOut: "ease-out";
    readonly 'ease-out': "ease-out";
    readonly easeInOut: "ease-in-out";
    readonly 'ease-in-out': "ease-in-out";
};
export type TimingKeyType = keyof typeof timingMap;
export interface IFBaseStyledElementProps {
    readonly type?: AnimateType;
    readonly duration?: string | number;
    readonly timing?: TimingKeyType;
    readonly delay?: string | number;
    readonly iteration?: number | 'infinite';
    readonly direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    readonly fillMode?: 'none' | 'forwards' | 'backwards' | 'both';
}
export interface IFAnimateProps extends IFBaseStyledElementProps, React.HTMLAttributes<HTMLDivElement> {
    readonly tagName?: keyof JSX.IntrinsicElements | React.ElementType;
    readonly children: React.ReactNode | string;
    readonly onAnimationEnd?: () => void;
}
