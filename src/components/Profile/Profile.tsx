import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostUserType} from "../../store/state";

export type ProfilePropsType = {
    state: {
        posts: PostUserType[]
    }
    addPost: (textPost: string) => void

}
const Profile: React.FC<ProfilePropsType> = ({state, addPost}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={state.posts} addPost={addPost} />
        </div>
    )
}

export default Profile