import React from 'react';
import styles from './User.module.css'
import userPhoto from '../../assets/images/ava-vk-animal-91.jpg'
import {NavLink} from 'react-router-dom';

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
                <NavLink to={`/profile/${id}`}>
                    <img src={photos.small !== null ? photos.small : userPhoto}
                         alt="avatar" />
                </NavLink>
                <button onClick={() => onToggleFollow(id)}>{followed ? 'followed' : 'unfollowed'}</button>
            </div>
            <div className={styles.infoUser}>
                <div>{name}</div>
                <span>{status}</span>
                <span>{'location.city'}</span>
                <span>{'location.country'}</span>
            </div>
        </div>
    );
};

