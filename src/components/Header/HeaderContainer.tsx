import React from 'react'
import {DataAuthUserType, DataUserType, setUserData} from "../../store/auth-reducer";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootState} from "../../store/redux-store";
import {authMe} from "../../api/api";

type HeaderContainerPropsType = {
    userData: DataUserType
    setUserData: (userData: DataUserType) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        authMe()
            .then(response => {
                if (response.data.resultCode === 0)
                    this.props.setUserData({...response.data.data, isAuth: true})
            })
    }

    render() {
        return (
            <Header data={this.props.userData}/>
        )
    }
}

const mapStateToProps = (state: AppRootState) => {
    return {
        userData: state.authUser
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer)

