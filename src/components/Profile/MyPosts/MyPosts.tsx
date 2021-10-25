import React from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css'
import {PostUserType} from "../../../store/state";

type MyPostsPropsType = {
    posts: PostUserType[]
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts}) => {

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
                {
                    posts.map((item =>  <Post text={item.text} countLikes={item.countLikes} id={item.id} />))
                }
            </div>

        </div>
    );
};

export default MyPosts;