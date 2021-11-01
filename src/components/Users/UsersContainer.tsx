import {AppRootState} from "../../store/redux-store";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {connect} from "react-redux";
import {setUsersAC, toggleFollowAC, UsersType} from "../../store/users-reducer";


const mapStateToProps = (state: AppRootState) => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onToggleFollow: (userID: string) => dispatch(toggleFollowAC(userID)),
        setUsers: (users: UsersType[]) => dispatch(setUsersAC(users))
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)