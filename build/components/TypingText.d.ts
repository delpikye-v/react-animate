interface TypingTextProps {
    text: string;
    speed?: number;
    loop?: boolean;
    as?: keyof JSX.IntrinsicElements;
}
export declare function TypingText({ text, speed, loop, as: Tag, }: TypingTextProps): JSX.Element;
export {};
