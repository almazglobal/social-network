import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostUserType, StoreType} from "../../store/store";

export type ProfilePropsType = {
    store: StoreType
}
const Profile: React.FC<ProfilePropsType> = ({store}) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts store={store}/>
        </div>
    )
}

export default Profile