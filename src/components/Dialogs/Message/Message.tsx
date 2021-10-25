import React from "react";
import styles from "../Message/Message.module.css";
import {MessageUserType} from "../../../store/state";

export const Message: React.FC<MessageUserType> = ({text, id}) => {
    return <div key={id}
                className={styles.message}>{text}</div>

}