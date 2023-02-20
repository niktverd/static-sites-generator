import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { Button } from 'components/Button';

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
    const [showPixel, setShowPixel] = useState(false);
    const { query } = useRouter();
    const tail_p = query.p ? `/?pixel=${query.p}` : '';
    const tail_s = query.s ? query.s : '';

    return (
        <div
            className={`${styles.container} ${styles[style]} ${
                border ? styles.border : ''
            }`}
        >
            {showPixel && !tail_p && (
                <img
                    height="1"
                    width="1"
                    src={`https://www.facebook.com/tr?id=${tail_s}`}
                />
            )}

            {title && <h4 className={styles.title}>{title}</h4>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className={`${styles.content}`}>
                <div className={styles.text}>
                    <div>{text}</div>
                </div>
            </div>
            {caption && url && (
                <div className={styles.buttonBlock}>
                    <Button
                        onClick={() => setShowPixel(true)}
                        url={`${url}${tail_p}`}
                    >
                        {caption}
                    </Button>
                </div>
            )}
        </div>
    );
};
