import {AppRootState} from "../../store/redux-store";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {connect} from "react-redux";
import {setCurrentPageAC, setTotalUserCountAC, setUsersAC, toggleFollowAC, UsersType} from "../../store/users-reducer";


const mapStateToProps = (state: AppRootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onToggleFollow: (userID: string) => dispatch(toggleFollowAC(userID)),
        setUsers: (users: UsersType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalUserCount: (count: number) => dispatch(setTotalUserCountAC(count)),
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)