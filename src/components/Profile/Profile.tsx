import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostUserType} from "../../store/state";

export type ProfilePropsType = {
    state: {
        posts: PostUserType[]
    }

}
const Profile: React.FC<ProfilePropsType> = ({state}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={state.posts} />
        </div>
    )
}

export default Profile