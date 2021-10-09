import React from 'react';
import styles from './Post.module.css'

type PostPropsType = {
    message: string
    countLikes: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={styles.post}>
            <img src="https://catalog-chess.ru/upload/iblock/c04/c044c9fe797a50ec94625938116e1c0f.jpg" alt="avatar" />
            {props.message}
            <div>
                <span>{props.countLikes}</span>
            </div>
        </div>
    );
};

export default Post;