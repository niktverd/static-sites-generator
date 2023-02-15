import React, {
    ButtonHTMLAttributes,
    MouseEvent,
    PropsWithChildren,
    useMemo,
} from 'react';

import styles from './Button.module.css';

export type ButtonProps = {
    caption?: string;
    url?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkWrapperProps = {
    url: string;
    target?: '_blank';
    className?: string;
} & PropsWithChildren;

const LinkWrapper = ({ children, url, className }: LinkWrapperProps) => {
    return (
        <a href={url} className={className}>
            {children}
        </a>
    );
};

export const Button = ({
    caption,
    url,
    className,
    children,
    ...buttonProps
}: ButtonProps) => {
    const button = useMemo(() => {
        return (
            <button
                {...buttonProps}
                className={`${styles.buttonBase} ${
                    url ? styles.innerButton : styles.outerButton
                } ${className}`}
            >
                {caption || children}
            </button>
        );
    }, [caption, buttonProps]);

    if (url) {
        return (
            <LinkWrapper url={url} className={styles.outerButton}>
                {button}
            </LinkWrapper>
        );
    }

    return button;
};
