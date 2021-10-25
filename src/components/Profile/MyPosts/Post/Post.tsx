import React from 'react';
import styles from './Post.module.css'
import {PostUserType} from "../../../../App";

type PostPropsType = {
    posts: PostUserType[]
}

const Post: React.FC<PostPropsType> = ({posts}) => {
    return <>
        {posts.map(item => {
            return <div key={item.id} className={styles.post}>
                <img src="https://catalog-chess.ru/upload/iblock/c04/c044c9fe797a50ec94625938116e1c0f.jpg" alt="avatar" />
                {item.text}
                <div>
                    <span>{item.countLikes}</span>
                </div>
            </div>
        })}
    </>


};

export default Post;