import React, {useContext} from 'react';
import {addPostAC} from "../../../store/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer: React.FC = () => {
    const store = useContext(StoreContext)
    const posts = store.getState().profilePage.posts

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = (textPost: string) => {
             store.dispatch(addPostAC(textPost))
    }

    return (
        <MyPosts addPost={addPost} posts={posts}/>
    );
};

