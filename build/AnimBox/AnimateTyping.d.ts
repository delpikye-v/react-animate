import React from 'react';
interface IFCursorProps {
    readonly cursorColor?: string | null;
}
export interface IFAnimateTypingProps extends IFCursorProps {
    readonly heading?: string;
    readonly className?: string;
    readonly dataText?: string[] | string;
    readonly children?: React.ReactNode | string[] | string;
    readonly typingSpeed?: number;
    readonly deletingSpeed?: number;
    readonly pauseTime?: number;
}
declare const AnimateTyping: React.FC<IFAnimateTypingProps>;
export default AnimateTyping;
