import React from 'react';
import styles from './User.module.css'
import userPhoto from '../../assets/images/ava-vk-animal-91.jpg'
import {NavLink} from 'react-router-dom';
import axios from "axios";

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
    const onToggleFollowHandler = (id: string) => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {withCredentials: true})
            .then(response => {

                     if (!response.data) {
                        debugger
                         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                             withCredentials: true
                             , headers:
                                 {'API-KEY': '2faeeadf-a972-43b3-9979-4b95c4b5cd8d'}
                         })
                            .then(response => {
                                debugger
                                if (response.data.resultCode === 0)
                                    onToggleFollow(id)
                            })
                    } else {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                            {
                            withCredentials: true
                            , headers:
                                {'API-KEY': '2faeeadf-a972-43b3-9979-4b95c4b5cd8d'}
                        })
                            .then(response => {
                                if (response.data.resultCode === 0)
                                    onToggleFollow(id)
                            })
                    }

            })
    }

    return (
        <div className={styles.userWrapper}>
            <div className={styles.statusUser}>
                <NavLink to={`/profile/${id}`}>
                    <img src={photos.small !== null ? photos.small : userPhoto}
                         alt="avatar"/>
                </NavLink>
                <button onClick={() => onToggleFollowHandler(id)}>{followed ? 'followed' : 'unfollowed'}</button>
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

