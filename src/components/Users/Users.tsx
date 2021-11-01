import React from 'react';
import {setUsersAC, UsersType} from "../../store/users-reducer";
import {User} from "./User";

type UsersPropsType = {
    users: UsersType[]
    onToggleFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}

export const Users: React.FC<UsersPropsType> = ({users, onToggleFollow, setUsers}) => {

    return (
        <>
            {users.map(item => <User
                key={item.id}
                avatarPhoto={item.avatarPhoto}
                fullName={item.fullName}
                status={item.status}
                location={item.location}
                followed={item.followed}
                id={item.id}
                onToggleFollow={onToggleFollow}
                setUsers={setUsers} />)}
        </>

    );
};

