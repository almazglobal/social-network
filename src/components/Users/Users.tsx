import React from 'react';
import {UsersType} from "../../store/users-reducer";
import {User} from "./User";
import axios from 'axios'

type UsersPropsType = {
    users: UsersType[]
    onToggleFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}

export class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props)
        this.getUsers()
    }

    getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return (

            <>
                <button onClick={this.getUsers}>Get Users</button>
                {this.props.users.map(item => <User
                    key={item.id}
                    photos={item.photos}
                    name={item.name}
                    status={item.status}
                    location={item.location}
                    followed={item.followed}
                    id={item.id}
                    onToggleFollow={this.props.onToggleFollow} />)}
            </>

        );
    }
}

