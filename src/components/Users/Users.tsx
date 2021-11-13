import React from 'react';
import {UsersType} from "../../store/users-reducer";
import {User} from "./User";
import axios from 'axios'
import styles from './Users.module.css'
import {createPages} from "../../utils/pageCreator";
import {Preloader} from "../common/Preloader/Preloader";

type UsersPropsType = {
    users: UsersType[]
    toggleFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUserCount: (count: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number,
    isFetching: boolean,
    toggleFetching: (isFetching: boolean) => void
}

export class Users extends React.Component<UsersPropsType> {

    getUsers = (currentPage: number) => {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false)
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
                {this.props.isFetching && <Preloader/>}
                {this.props.users.map(item => <User
                    key={item.id}
                    photos={item.photos}
                    name={item.name}
                    status={item.status}
                    location={item.location}
                    followed={item.followed}
                    id={item.id}
                    onToggleFollow={this.props.toggleFollow} />)}
            </>

        );
    }
}

