import {AppRootState} from "../../store/redux-store";
import {Users} from "./Users";
import {connect} from "react-redux";
import {
    getFollowUsersThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleFetching,
    toggleFollow,
    toggleFollowInProgress
} from "../../store/users-reducer";


const mapStateToProps = (state: AppRootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress,
    }
}
/*
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onToggleFollow: (userID: string) => dispatch(toggleFollowAC(userID)),
        setUsers: (users: UsersType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalUserCount: (count: number) => dispatch(setTotalUserCountAC(count)),
        toggleFetching: (isFetching: boolean) => dispatch(toggleFetchingAC(isFetching))
    }
}*/

export const UsersContainer = connect(mapStateToProps,
    {
        toggleFollow,
        setUsers,
        setCurrentPage,
        setTotalUserCount,
        toggleFetching,
        toggleFollowInProgress,
        getUsers: getUsersThunkCreator,
        getFollowUsers: getFollowUsersThunkCreator,
    })(Users)