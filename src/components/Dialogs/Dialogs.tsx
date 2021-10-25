import React from 'react'
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessageUserType, UsersType} from "../../store/state";

export type DialogTypeProps = {
    state: {
        users: UsersType[]
        messages:  MessageUserType[]
    }
}

export const Dialogs: React.FC<DialogTypeProps> = ({state}) => {



    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {
                    state.users.map(item => <DialogItem name={item.name}
                                                  id={item.id} />)
                }

            </div>
            <div className={styles.messages}>
                {
                    state.messages.map(item => <Message text={item.text}
                                                  id={item.id} />)
                }
            </div>
        </div>
    )
}

