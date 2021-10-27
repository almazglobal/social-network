import React, {ChangeEvent, LegacyRef, useRef, useState} from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css'
import {addPostAC, PostUserType} from "../../../store/state";

type MyPostsPropsType = {
    posts: PostUserType[]
    dispatch: (action: {type: string, payload: any}) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, dispatch}) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const [textPost, setTextPost] = useState('')
    const addPostHandler = () => {
        // const text = newPostElement.current?.value
        if (textPost) {
            dispatch(addPostAC(textPost))
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