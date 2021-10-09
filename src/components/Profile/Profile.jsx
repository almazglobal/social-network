import React from 'react'
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.content}>
            <div><img
                src="https://s2.best-wallpaper.net/wallpaper/2560x1600/2007/Lake-calm-water-surface-reflection-mountains_2560x1600.jpg"
                alt="halls"/></div>
            <div>ava+description</div>
            <MyPosts />
        </div>
    )
}

export default Profile