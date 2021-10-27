import React from 'react';
import styles from './Post.module.css'
import {PostUserType} from "../../../../store/store";

const Post: React.FC<PostUserType> = ({text, countLikes, id}) => {
        return <div key={id} className={styles.post}>
            <img src="https://catalog-chess.ru/upload/iblock/c04/c044c9fe797a50ec94625938116e1c0f.jpg"
                 alt="avatar" />
            {text}
            <div>
                <span>{countLikes}</span>
            </div>
        </div>
    }

export default Post;