import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type UsersType = {
    id: string
    followed: boolean
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    location: {
        city: string,
        country: string,
    }
}

export type UsersStateType = {
    users: UsersType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: string[]
}
const initState: UsersStateType = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 2,
    isFetching: true,
    followInProgress: [],
}

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS';

export type ToggleFollowInProgressAction = {
    type: typeof TOGGLE_FOLLOW_IN_PROGRESS,
    payload: {
        userId: string,
        isFetching: boolean,
    },
}

type ToggleFollowInProgressACType = (payload: { userId: string, isFetching: boolean }) => ToggleFollowInProgressAction

export const toggleFollowInProgress: ToggleFollowInProgressACType = (payload: { userId: string, isFetching: boolean }) => ({
    type: TOGGLE_FOLLOW_IN_PROGRESS,
    payload
})

export type ToggleFetchingAction = {
    type: typeof TOGGLE_FETCHING,
    payload: boolean,
}

type ToggleFetchingACType = (payload: boolean) => ToggleFetchingAction

export const toggleFetching: ToggleFetchingACType = (payload: boolean) => ({type: TOGGLE_FETCHING, payload})

export type ToggleFollowAction = {
    type: typeof TOGGLE_FOLLOW
    payload: string
}
type ToggleFollowACType = (payload: string) => ToggleFollowAction

export const toggleFollow: ToggleFollowACType = (payload) => ({type: TOGGLE_FOLLOW, payload})

export type SetUsersAction = {
    type: typeof SET_USERS
    payload: UsersType[]
}
type SetUsersACType = (payload: UsersType[]) => SetUsersAction

export const setUsers: SetUsersACType = (payload) => ({type: SET_USERS, payload})

export type SetCurrentPageAction = {
    type: typeof SET_CURRENT_PAGE
    payload: number
}
type SetCurrentPageACType = (payload: number) => SetCurrentPageAction

export const setCurrentPage: SetCurrentPageACType = (payload) => ({type: SET_CURRENT_PAGE, payload})

export type SetTotalUserCountAction = {
    type: typeof SET_TOTAL_USER_COUNT
    payload: number
}
type SetTotalUserCountACType = (payload: number) => SetTotalUserCountAction

export const setTotalUserCount: SetTotalUserCountACType = (payload) => ({type: SET_TOTAL_USER_COUNT, payload})

type MainAction = ToggleFollowAction | SetUsersAction | SetCurrentPageAction
    | SetTotalUserCountAction | ToggleFetchingAction | ToggleFollowInProgressAction

export const usersReducer = (state = initState, action: MainAction): UsersStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(item => item.id == action.payload ? {...item, followed: !item.followed} : item)
            }
        case SET_USERS:
            return {...state, users: [...action.payload]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.payload}
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.payload}
        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.payload.isFetching
                    ? [...state.followInProgress, action.payload.userId]
                    : [...state.followInProgress.filter(item => item !== action.payload.userId)]
            }
        default:
            return state
    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
        })
    }
}

export const getFollowUsersThunkCreator = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowInProgress({userId: id, isFetching: true}))
        usersAPI.getStatusFollow(id)
            .then(data => {
                if (!data) {
                    usersAPI.setFollow(id)
                        .then(dataUser => {
                            if (dataUser.resultCode === 0) {
                                dispatch(toggleFollow(id))
                            }
                            dispatch(toggleFollowInProgress({userId: id, isFetching: false}))
                        })
                } else {
                    usersAPI.setUnFollow(id)
                        .then(dataUser => {
                            if (dataUser.resultCode === 0) {
                                dispatch(toggleFollow(id))
                            }
                            dispatch(toggleFollowInProgress({userId: id, isFetching: false}))
                        })
                }
            })
    }
}
