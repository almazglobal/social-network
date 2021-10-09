import React from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message={"4344"} countLikes={12}/>
                <Post message={"dfdfdf"} countLikes={33}/>
            </div>

        </div>
    );
};

export default MyPosts;