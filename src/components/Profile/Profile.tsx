import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostUserType} from "../../store/state";

export type ProfilePropsType = {
    state: {
        posts: PostUserType[]
    }
    dispatch: (action: {type: string, payload: any}) => void

}
const Profile: React.FC<ProfilePropsType> = ({state, dispatch}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={state.posts} dispatch={dispatch} />
        </div>
    )
}

export default Profile