import React from 'react';

import styles from './Text.module.css';

export enum TextBlockDirections {
    Straight = 'straight',
    Reverse = 'reverse',
};

type TextProps = {
    text: string;
    title?: string;
    subtitle?: string;
    image?: string;
    direction?: TextBlockDirections;
    size?: 'small' | 'normal' | 'large';
};

export const Text = ({
    text,
    title,
    subtitle,
    image,
    direction = TextBlockDirections.Straight,
    size = 'normal',
}: TextProps) => {
    return (
        <div className={styles.container}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className={`${styles.content} ${styles[direction]}`}>
                <div className={styles.text}>
                    <div>{text}</div>
                </div>
                {image && (
                    <div className={`${styles.image} ${styles[size]}`}>
                        <img
                            src={image}
                            width="100%"
                            height="100%"
                            className={styles.img}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
