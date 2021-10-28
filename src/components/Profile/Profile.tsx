import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AppStoreType} from "../../store/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    store: AppStoreType
}
const Profile: React.FC<ProfilePropsType> = ({store}) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={store}/>
        </div>
    )
}

export default Profile