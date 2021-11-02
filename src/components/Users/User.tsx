import React from 'react';
import styles from './User.module.css'
import userPhoto from '../../assets/images/ava-vk-animal-91.jpg'

type UserPropsType = {
    photos: {
        small: string
        large: string
    }
    id: string,
    followed: boolean
    name: string
    status: string
    location: {
        city: string,
        country: string,
    },
    onToggleFollow: (userId: string) => void
}

export const User: React.FC<UserPropsType> = ({
                                                  id,
                                                  followed,
                                                  name,
                                                  status,
                                                  location,
                                                  onToggleFollow,
                                                  photos,
                                              }) => {



    return (
        <div className={styles.userWrapper}>
            <div className={styles.statusUser}>
                <img src={photos.small !== null ? photos.small : userPhoto}
                     alt="avatar" />
                <button onClick={() => onToggleFollow(id)}>{followed ? 'followed' : 'unfollowed'}</button>
            </div>
            <div className={styles.infoUser}>
                <span>{name}</span>
                <span>{status}</span>
                <span>{'location.city'}</span>
                <span>{'location.country'}</span>
            </div>
        </div>
    );
};

