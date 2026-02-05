import React from 'react';
export interface IFAnimateTypingProps {
    readonly heading?: string;
    readonly className?: string;
    /**
     * Text source (recommended)
     */
    readonly dataText?: string[] | string;
    /**
     * Fallback text source
     * Only string | string[] are supported
     */
    readonly children?: React.ReactNode | string | string[];
    readonly typingSpeed?: number;
    readonly deletingSpeed?: number;
    readonly pauseTime?: number;
    readonly cursorColor?: string | null;
}
export declare const AnimateTyping: React.FC<IFAnimateTypingProps>;
export default AnimateTyping;
