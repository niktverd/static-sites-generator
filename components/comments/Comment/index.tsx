import React from 'react';

import styles from './Comment.module.css';

export type CommentProps = {
    text: string;
    avatar?: string;
    name?: string;
    image?: string;
};

export const Comment = ({ text, avatar, name, image }: CommentProps) => {
    return (
        <div key={text + Math.random()} className={styles.comment}>
            <div className={styles.left}>
                <div className={styles.avatar}>
                    <img
                        width="100%"
                        height="100%"
                        src={avatar || 'img/16.jpg'}
                        className={styles.img}
                    />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.name || 'anonymus'}>{name}</div>
                <div className={styles.text}>{text}</div>
                {image && (
                    <div className={styles.image}>
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
