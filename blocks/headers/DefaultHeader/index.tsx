import React from 'react'

import styles from './DefaultHeader.module.css';

export type DefaultHeaderProps = {
    title: string;
};

export const DefaultHeader = ({title}: DefaultHeaderProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 style={{zIndex: 3}}>{title}</h1>
            </div>
        </div>
    )
}
