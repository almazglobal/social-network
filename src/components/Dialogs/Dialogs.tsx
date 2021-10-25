import React from 'react'
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessageUserType, UsersType} from "../../App";

// type DialogsPropsType = {
//     users: UsersType[]
// }

export const Dialogs = () => {

    const users: UsersType[] = [
        {id: '1', name: 'Alex'},
        {id: '2',  name: 'Sasha'},
        {id: '3',  name: 'Bob'},
    ]

    const messages: MessageUserType[] = [
        {id: '1', text: 'Hello'},
        {id: '2',  text: 'Yo'},
        {id: '3',  text: 'Bye'},
    ]


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
               <DialogItem users={users} />
            </div>
            <div className={styles.messages}>
               <Message messages={messages} />
            </div>
        </div>
    )
}

