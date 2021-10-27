import React, {ChangeEvent, useState} from 'react'
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageAC, SendMessageAction, MessageUserType, UsersType} from "../../store/state";

export type DialogTypeProps = {
    state: {
        users: UsersType[]
        messages: MessageUserType[]
    }
    dispatch: (action: SendMessageAction) => void
}

export const Dialogs: React.FC<DialogTypeProps> = ({state, dispatch}) => {

    const [message, setMessage] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onAddMessageHandler = () => {
        dispatch(addMessageAC(message))
        setMessage('')
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {
                    state.users.map(item => <DialogItem name={item.name}
                                                        id={item.id} />)
                }

            </div>
            <div className={styles.messages}>
                <div>{
                    state.messages.map(item => <Message text={item.text}
                                                        id={item.id} />)
                }</div>
                <div className={styles.enterMessage}>
                    <div>
                      <textarea placeholder={'Enter your message'}
                                onChange={onChangeHandler}
                                value={message} />
                    </div>
                    <div>
                        <button onClick={onAddMessageHandler}>Send</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

