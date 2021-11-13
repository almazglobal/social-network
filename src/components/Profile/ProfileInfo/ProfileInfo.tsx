import React from "react";
import styles from './ProfileInfo.module.css'
import {ProfileType} from "../../../store/profile-reducer";

type ProfileInfoType = {
    profile: ProfileType | null
}
export const ProfileInfo: React.FC<ProfileInfoType> = ({profile}) => {
    return (
        <div>
            {profile && (<div>
                    <img
                        src={profile.photos.small ? profile.photos.small : ''}
                        alt="halls" />
                    <div>
                        {profile.fullName}
                    </div>
                    <div>
                        {profile.aboutMe}
                    </div>
                    <div>
                        {profile.lookingForAJob}
                    </div>
                    <div>

                        <a href={profile.contacts.vk ? profile.contacts.vk : ''}>{profile.contacts.vk !== null ? profile.contacts.vk : ''}</a>
                    </div>
                </div>
            )
            }
            <div className={styles.descriptionWrapper}>ava+description</div>
        </div>
    )
}