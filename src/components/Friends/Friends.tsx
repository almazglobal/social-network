import React from 'react';
import styles from './Friends.module.css'

type FriendsPropsType = {
    name: string
    id: string
}
export const Friends: React.FC<FriendsPropsType> = ({name, id}) => {
    return (
        <span key={id}>
            <span className={styles.friend}>{name}</span>
        </span>
    );
};

