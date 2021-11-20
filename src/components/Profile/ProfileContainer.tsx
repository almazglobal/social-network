import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootState} from "../../store/redux-store";
import {ProfileType, setUserProfileThunkCreator} from "../../store/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamsType = {
    userId: string,
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & {
    profile: ProfileType | null
    setUserProfile: (userId: string) => void
    isAuth: boolean
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        debugger
        if (!userId) {
            userId = '2'
        }
        this.props.setUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state: AppRootState) => {
    return {
        profile: state.profilePage.profile,
    }
}


const ProfileContainerWithUrl = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {setUserProfile: setUserProfileThunkCreator})(ProfileContainerWithUrl)
