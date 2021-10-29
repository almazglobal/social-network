import React, {ChangeEvent, useContext, useState} from 'react'
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageAC} from "../../store/dialogs-reducer";
import {AppStoreType} from "../../store/redux-store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer: React.FC = () => {
    const store = useContext(StoreContext)
    const users = store.getState().dialogsPage.users
    const messages = store.getState().dialogsPage.messages
    const [message, setMessage] = useState('')

    const onSendMessage = (message: string) => {
        store.dispatch(sendMessageAC(message))
    }
    return (
       <Dialogs users={users} messages={messages} onSendMessage={onSendMessage}/>
    )
}

