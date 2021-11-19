import React from 'react'
import {DataUserType, setUserData, setUserDataThunkCreator} from "../../store/auth-reducer";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootState} from "../../store/redux-store";
import {usersAPI} from "../../api/api";

type HeaderContainerPropsType = {
    userData: DataUserType
    setUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.setUserData();
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

export default connect(mapStateToProps, {setUserData: setUserDataThunkCreator})(HeaderContainer)

