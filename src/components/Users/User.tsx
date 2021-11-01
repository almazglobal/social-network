import React from 'react';
import styles from './User.module.css'
import {UsersType} from "../../store/users-reducer";

type UserPropsType = {
    avatarPhoto: string
    id: string,
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string,
        country: string,
    },
    onToggleFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}

export const User: React.FC<UserPropsType> = ({
                                                  id,
                                                  followed,
                                                  fullName,
                                                  status,
                                                  location,
                                                  onToggleFollow,
                                                  avatarPhoto,
                                                  setUsers,
                                              }) => {


setUsers([
    {id: '1', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: true, fullName: 'Alex', status: 'Driven', location: {city: 'Samara', country: 'Russia'}},
    {id: '2', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: false, fullName: 'Bob', status: 'Living', location: {city: 'New-York', country: 'America'}},
    {id: '3', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: true, fullName: 'John', status: 'Busy', location: {city: 'Chicago', country: 'America'}},
    {id: '4', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: true, fullName: 'Ann', status: 'Homework', location: {city: 'Kiev', country: 'Ukraine'}},
    {id: '5', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: false, fullName: 'Ivan', status: 'Driven', location: {city: 'Moscow', country: 'Russia'}},
    {id: '6', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: true, fullName: 'Misha', status: 'Driven', location: {city: 'Kazan', country: 'Russia'}},
    {id: '7', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: true, fullName: 'Katy', status: 'Driven', location: {city: 'Minsk', country: 'Belarus'}},
])
    return (
        <div className={styles.userWrapper}>
            <div className={styles.statusUser}>
                <img src={avatarPhoto}
                     alt="avatar" />
                <button onClick={() => onToggleFollow(id)}>{followed ? 'followed' : 'unfollowed'}</button>
            </div>
            <div className={styles.infoUser}>
                <span>{fullName}</span>
                <span>{status}</span>
                <span>{location.city}</span>
                <span>{location.country}</span>
            </div>
        </div>
    );
};

