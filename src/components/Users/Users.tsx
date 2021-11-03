import React from 'react';
import {setTotalUserCountAC, UsersType} from "../../store/users-reducer";
import {User} from "./User";
import axios from 'axios'
import styles from './Users.module.css'
import {createPages} from "../../utils/pageCreator";

type UsersPropsType = {
    users: UsersType[]
    onToggleFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUserCount: (count: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
}

export class Users extends React.Component<UsersPropsType> {

    getUsers = (currentPage: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    componentDidMount() {
        this.getUsers(this.props.currentPage)
    }

    onPageChanged = (item: number) => {
        this.props.setCurrentPage(item)
        this.getUsers(item)
    }

    render() {
        let countPages = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages: number[] = []
        createPages(pages, countPages, this.props.currentPage)
        // for(let i = 1;i <= countPages; i++) {
        //     pages.push(i)
        // }
        return (
            <>
                <div>
                    {pages.map(item => {
                       return <span onClick={ () => this.onPageChanged(item)}
                                    className={this.props.currentPage === item ? styles.selectedPage: ''}
                                    key={item}>{item}
                       </span>
                    })}
                </div>
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

