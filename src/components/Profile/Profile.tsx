import React from 'react'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../store/profile-reducer";
type ProfileTypeProps = {
    profile: ProfileType | null
    status: string
    updateUserStatusProfile: (status: string) => void

}
const Profile: React.FC<ProfileTypeProps> = ({profile, status, updateUserStatusProfile}) => {

    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateUserStatusProfile={updateUserStatusProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile