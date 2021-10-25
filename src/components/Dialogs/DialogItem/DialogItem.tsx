import React from "react";
import styles from "../DialogItem/DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../store/state";

export const DialogItem: React.FC<UsersType> = ({id, name}) => {
    return <div key={id}
                className={styles.dialog}>
        <NavLink to={`${/dialogs/}${id}`}
                 activeClassName={styles.active}>{name}</NavLink>
    </div>
}