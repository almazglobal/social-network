import React from "react";
import styles from "../DialogItem/DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../App";

export type DialogItemType = {
    users: UsersType[]
}
export const DialogItem: React.FC<DialogItemType> = ({users}) => {

    return <>
        {users.map(item => {
                return (
                    <div key={item.id}
                         className={styles.dialog}>
                        <NavLink to={`${/dialogs/}${item.id}`}
                                 activeClassName={styles.active}>{item.name}</NavLink>
                    </div>
                )}
        )}
    </>
}