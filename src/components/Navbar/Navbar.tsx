import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import {Friends} from "../Friends/Friends";
import {AppStoreType} from "../../store/redux-store";
import {UsersType} from "../../store/store";

type NavbarPropsType = {
   friends: UsersType[]
}

export const Navbar: React.FC<NavbarPropsType> = ({friends}) => {

    return (
        <nav className={styles.nav}>
            <div className={styles.item}><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></div>
            <div className={styles.item}><NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink></div>
            <div className={`${styles.item} ${styles.active}`}><NavLink to="/news" activeClassName={styles.active}>News</NavLink></div>
            <div className={styles.item}><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></div>
            <div className={styles.item}><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></div>
            <div className={styles.friends}>
                <h2>Friends</h2>
                {
                    friends.map(item => <Friends name={item.name} id={item.name}/>)
                }
            </div>
        </nav>
    )
}