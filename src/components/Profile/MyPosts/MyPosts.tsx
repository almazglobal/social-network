import React, {ChangeEvent, LegacyRef, useRef, useState} from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css'
import {PostUserType, StoreType} from "../../../store/store";
import {addPostAC} from "../../../store/profile-reducer";

type MyPostsPropsType = {
    store: StoreType
}

const MyPosts: React.FC<MyPostsPropsType> = ({store}) => {

    const posts = store.getState().profilePage.posts
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const [textPost, setTextPost] = useState('')
    const addPostHandler = () => {

        if (textPost) {
            store.dispatch(addPostAC(textPost))
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
                    <textarea ref={newPostElement}
                              value={textPost}
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
                                             id={item.id} />))
                }
            </div>

        </div>
    );
};

export default MyPosts;