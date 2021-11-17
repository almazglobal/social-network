import React from 'react';
import {UsersType} from "../../store/users-reducer";
import {User} from "./User";
import styles from './Users.module.css'
import {createPages} from "../../utils/pageCreator";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: UsersType[]
    toggleFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUserCount: (count: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: string[]
    toggleFetching: (isFetching: boolean) => void
    toggleFollowInProgress: (isFollow: {
        userId: string,
        isFetching: boolean,
    }) => void
    getUsers: (currentPage: number, pageSize: number) => void
    getFollowUsers: (id: string) => void

}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (item: number) => {
        this.props.setCurrentPage(item)
        this.props.getUsers(item, this.props.pageSize)
    }

    render() {
        let countPages = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages: number[] = []
        createPages(pages, countPages, this.props.currentPage)
        return (
            <>
                <div>
                    {pages.map(item => {
                        return <span onClick={() => this.onPageChanged(item)}
                                     className={this.props.currentPage === item ? styles.selectedPage : ''}
                                     key={item}>{item}
                       </span>
                    })}
                </div>
                {this.props.isFetching && <Preloader />}
                {this.props.users.map(item => <User
                    key={item.id}
                    photos={item.photos}
                    name={item.name}
                    status={item.status}
                    location={item.location}
                    followed={item.followed}
                    id={item.id}
                    onToggleFollow={this.props.toggleFollow}
                    toggleFollowInProgress={this.props.toggleFollowInProgress}
                    followInProgress={this.props.followInProgress}
                    getFollowUsers={this.props.getFollowUsers}
                />)}
            </>

        );
    }
}

