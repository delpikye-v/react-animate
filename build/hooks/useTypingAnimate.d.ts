interface IFUseTypingIFAnimateOptions {
    text: string;
    speed?: number;
    loop?: boolean;
}
export declare function useTypingAnimate({ text, speed, loop, }: IFUseTypingIFAnimateOptions): {
    output: string;
    isDone: boolean;
    reset: () => void;
};
export {};
