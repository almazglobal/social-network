import React from 'react'
import {DataAuthUserType, DataUserType, setUserData} from "../../store/auth-reducer";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootState} from "../../store/redux-store";

type HeaderContainerPropsType = {
    userData: DataUserType
    setUserData: (userData: DataUserType) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get<DataAuthUserType>(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            withCredentials: true
        })
            .then((response) => {
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

