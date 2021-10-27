import React, {ChangeEvent, useState} from 'react'
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StoreType} from "../../store/store";
import {sendMessageAC} from "../../store/dialogs-reducer";

export type DialogTypeProps = {
    store: StoreType
}

export const Dialogs: React.FC<DialogTypeProps> = ({store}) => {
    const users = store.getState().dialogsPage.users
    const messages = store.getState().dialogsPage.messages
    const [message, setMessage] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onSendMessageHandler = () => {
        store.dispatch(sendMessageAC(message))
        setMessage('')
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {
                    users.map(item => <DialogItem name={item.name}
                                                        id={item.id}/>)
                }

            </div>
            <div className={styles.messages}>
                <div>{
                    messages.map(item => <Message text={item.text}
                                                        id={item.id}/>)
                }</div>
                <div className={styles.enterMessage}>
                    <div>
                      <textarea placeholder={'Enter your message'}
                                onChange={onChangeHandler}
                                value={message}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageHandler}>Send</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

