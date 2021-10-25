import React from "react";
import styles from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div><img
                src="https://s2.best-wallpaper.net/wallpaper/2560x1600/2007/Lake-calm-water-surface-reflection-mountains_2560x1600.jpg"
                alt="halls" /></div>
            <div className={styles.descriptionWrapper}>ava+description</div>
        </div>
    )
}