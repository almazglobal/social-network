import React from 'react'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../store/profile-reducer";
type ProfileTypeProps = {
    profile: ProfileType | null
}
const Profile: React.FC<ProfileTypeProps> = ({profile}) => {

    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile