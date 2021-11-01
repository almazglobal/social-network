import React, {ChangeEvent, useState} from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css'
import {PostUserType} from "../../../store/store";

type MyPostsPropsType = {
    addPost: (textPost: string) => void
    posts: PostUserType[]
}

const MyPosts: React.FC<MyPostsPropsType> = ({addPost, posts}) => {

    const [textPost, setTextPost] = useState('')
    const addPostHandler = () => {
        if (textPost) {
            addPost(textPost)
            setTextPost('')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextPost(e.currentTarget.value)
    }

    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={textPost}
                              onChange={onChangeHandler} />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {
                   posts.map((item => <Post text={item.text}
                                             countLikes={item.countLikes}
                                             id={item.id} key={item.id} />))
                }
            </div>

        </div>
    );
};

export default MyPosts;