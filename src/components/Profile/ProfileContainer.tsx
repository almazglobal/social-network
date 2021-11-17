import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootState} from "../../store/redux-store";
import {ProfileType, setUserProfile} from "../../store/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type PathParamsType = {
    userId: string,
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & {
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType | null) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        debugger
        if (!userId) {
            userId = '2'
        }
        usersAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state: AppRootState) => {
    return {
        profile: state.profilePage.profile,
    }
}
const ProfileContainerWithUrl = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithUrl)
