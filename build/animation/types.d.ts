import type { AnimName } from "../key-frames";
export declare const timingMap: {
    readonly linear: "linear";
    readonly ease: "ease";
    readonly easeIn: "ease-in";
    readonly easeOut: "ease-out";
    readonly easeInOut: "ease-in-out";
};
export type TypeTimingKey = keyof typeof timingMap;
export interface IFBaseStyledElementProps {
    readonly type?: AnimName;
    readonly duration?: string | number;
    readonly timing?: TypeTimingKey;
    readonly delay?: string | number;
    readonly iteration?: number | "infinite";
    readonly direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
    readonly fillMode?: "none" | "forwards" | "backwards" | "both";
}
export interface IFAnimateProps extends IFBaseStyledElementProps, React.HTMLAttributes<HTMLDivElement> {
    readonly tagName?: keyof JSX.IntrinsicElements | React.ElementType;
    readonly children: React.ReactNode | string;
}
export type TypeAnimationIntensity = "soft" | "medium" | "hard";
export interface IFAnimateOptions {
    intensity?: TypeAnimationIntensity;
    duration?: number | string;
    delay?: number;
    timing?: string;
    iteration?: number;
    keep?: boolean;
}
export interface IFAnimateRecipeOptions extends IFAnimateOptions {
}
export type TypeAnimateRecipeResolver = AnimName | ((options?: IFAnimateRecipeOptions) => AnimName);
