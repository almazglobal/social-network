import React from 'react'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../store/profile-reducer";
import {Redirect} from "react-router-dom";
type ProfileTypeProps = {
    profile: ProfileType | null
    isAuth: boolean
}
const Profile: React.FC<ProfileTypeProps> = ({profile, isAuth}) => {
    if (!isAuth) return <Redirect to={'/login'}/>
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile