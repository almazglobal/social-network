import React from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css'
import {PostUserType} from "../../../App";

const MyPosts = () => {

    const posts: PostUserType[] = [
        {id: '1', text: 'My first post', countLikes: 122},
        {id: '2', text: 'React rules!', countLikes: 100500}
    ]

    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                <Post posts={posts} />
            </div>

        </div>
    );
};

export default MyPosts;