import React, {ChangeEvent, useState} from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css'
import {addPostAC} from "../../../store/profile-reducer";
import {AppStoreType} from "../../../store/redux-store";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    store: AppStoreType
}

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({store}) => {

    const posts = store.getState().profilePage.posts

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = (textPost: string) => {
             store.dispatch(addPostAC(textPost))
    }

    return (
        <MyPosts addPost={addPost} posts={posts}/>
    );
};

