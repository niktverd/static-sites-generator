import { Button } from 'components/Button';
import React from 'react';

import styles from './Note.module.css';

export enum NoteStyles {
    Warning = 'warning',
    Info = 'info',
    Error = 'error',
    Note = 'note',
    Success = 'success',
    Block = 'block',
}

type NoteProps = {
    text: string;
    title?: string;
    subtitle?: string;
    style?: NoteStyles;
    border?: boolean;
    caption?: string;
    url?: string;
};

export const Note = ({
    text,
    title,
    subtitle,
    caption,
    url,
    style = NoteStyles.Note,
    border = false,
}: NoteProps) => {
    return (
        <div
            className={`${styles.container} ${styles[style]} ${
                border ? styles.border : ''
            }`}
        >
            {title && <h4 className={styles.title}>{title}</h4>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className={`${styles.content}`}>
                <div className={styles.text}>
                    <div>{text}</div>
                </div>
            </div>
            {caption && url && (
                <div className={styles.buttonBlock}>
                    <Button url={url}>{caption}</Button>
                </div>
            )}
        </div>
    );
};
