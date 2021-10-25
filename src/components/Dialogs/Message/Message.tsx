import React from "react";
import styles from "../Message/Message.module.css";
import {MessageUserType} from "../../../App";

type MessagePropsType = {
    messages: MessageUserType[]
}
export const Message: React.FC<MessagePropsType> = ({messages}) => {
    return <>
        {messages.map(item => {
            return <div key={item.id}
                        className={styles.message}>{item.text}</div>
        })}
    </>
}