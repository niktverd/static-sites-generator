import React from 'react';
import { CommentProps, Comment } from '../../components/comments/Comment';

import styles from './Comments.module.css';

type CommentsProps = {
    items: CommentProps[];
    title?: string;
};

export const Comments = ({ items = [], title }: CommentsProps) => {
    return (
        <div className={styles.comments}>
            {title && <h2>{title}</h2>}
            {items?.length && items.map(Comment)}
        </div>
    );
};
