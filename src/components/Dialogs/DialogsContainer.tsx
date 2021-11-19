import {sendMessageAC} from "../../store/dialogs-reducer";
import {AppRootState} from "../../store/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppRootState) => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        isAuth: state.authUser.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessage: (message: string) => {
            dispatch(sendMessageAC(message))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)