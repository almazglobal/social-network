import React from 'react';
import {addPostAC} from "../../../store/profile-reducer";
import MyPosts from "./MyPosts";
import {AppRootState} from "../../../store/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state: AppRootState) => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (textPost: string) => dispatch(addPostAC(textPost))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

