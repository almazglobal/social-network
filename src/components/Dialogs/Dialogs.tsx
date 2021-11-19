import React, {ChangeEvent, useState} from 'react'
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessageUserType, UsersType} from "../../store/store";
import {Redirect} from "react-router-dom";
import {Login} from "../Login/Login";

export type DialogTypeProps = {
    users: UsersType[]
    messages: MessageUserType[]
    onSendMessage: (message: string) => void
    isAuth: boolean
}

export const Dialogs: React.FC<DialogTypeProps> = ({users,messages, onSendMessage, isAuth}) => {

    const [message, setMessage] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onSendMessageHandler = () => {
        onSendMessage(message)
        setMessage('')
    }

    if (!isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {
                    users.map(item => <DialogItem name={item.name}
                                                        id={item.id} key={item.id}/>)
                }

            </div>
            <div className={styles.messages}>
                <div>{
                    messages.map(item => <Message text={item.text}
                                                        id={item.id} key={item.id}/>)
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

