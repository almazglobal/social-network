import {sendMessageAC} from "../../store/dialogs-reducer";
import {AppRootState} from "../../store/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state: AppRootState) => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessage: (message: string) => {
            dispatch(sendMessageAC(message))
        }
    }
}

export const DialogsContainer = compose<any>(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)