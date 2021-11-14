import React from 'react'
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {DataUserType} from "../../store/auth-reducer";

type HeaderPropsType = {
    data: DataUserType
}

export const Header: React.FC<HeaderPropsType> = ({data}) => {
    return (
        <header className={styles.header}>
            <img src="https://regnum.ru/uploads/pictures/news/2015/11/13/regnum_picture_144736430464322_normal.png"
                 alt="logo"/>
            {data.isAuth &&  <div>{data.id} | {data.login} | {data.email}</div>}
            <NavLink className={styles.loginBlock} to={'/login'}>Login</NavLink>
        </header>)
}
