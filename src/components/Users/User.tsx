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
    toggleFollowInProgress: (isFollow: {
        userId: string,
        isFetching: boolean,
    }) => void
    followInProgress: string[]
    getFollowUsers: (id: string) => void
}

export const User: React.FC<UserPropsType> = ({
                                                  id,
                                                  followed,
                                                  name,
                                                  status,
                                                  location,
                                                  onToggleFollow,
                                                  photos,
                                                  toggleFollowInProgress,
                                                  followInProgress,
                                                  getFollowUsers,
                                              }) => {
    const onToggleFollowHandler = (id: string) => {
        getFollowUsers(id)
    }

    return (
        <div className={styles.userWrapper}>
            <div className={styles.statusUser}>
                <NavLink to={`/profile/${id}`}>
                    <img src={photos.small !== null ? photos.small : userPhoto}
                         alt="avatar"/>
                </NavLink>
                <button disabled={followInProgress.some(item => item === id)}
                        onClick={() => onToggleFollowHandler(id)}>{followed ? 'followed' : 'unfollowed'}</button>
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

