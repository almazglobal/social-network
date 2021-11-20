import React from "react";
import {Redirect} from "react-router-dom";
import {AppRootState} from "../store/redux-store";
import {connect} from "react-redux";

type RedirectComponentPropsType = {
    isAuth: boolean
}

const mapStateToPropsForAuthRedirect = (state: AppRootState) => {
    return {
        isAuth: state.authUser.isAuth,
    }
}

export const withAuthRedirect = <P extends RedirectComponentPropsType>(Component: React.ComponentType<P>) => {
    class RedirectComponent extends React.Component<P & RedirectComponentPropsType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }

    }
    return connect(mapStateToPropsForAuthRedirect)(RedirectComponent)
}