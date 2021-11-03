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
}
const initState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 2,
}

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';

export type ToggleFollowAction = {
    type: typeof TOGGLE_FOLLOW
    payload: string
}
type ToggleFollowACType = (payload: string) => ToggleFollowAction

export const toggleFollowAC: ToggleFollowACType = (payload) => ({type: TOGGLE_FOLLOW, payload})

export type SetUsersAction = {
    type: typeof SET_USERS
    payload: UsersType[]
}
type SetUsersACType = (payload: UsersType[]) => SetUsersAction

export const setUsersAC: SetUsersACType = (payload) => ({type: SET_USERS, payload})

export type SetCurrentPageAction = {
    type: typeof SET_CURRENT_PAGE
    payload: number
}
type SetCurrentPageACType = (payload: number) => SetCurrentPageAction

export const setCurrentPageAC: SetCurrentPageACType = (payload) => ({type: SET_CURRENT_PAGE, payload})

export type SetTotalUserCountAction = {
    type: typeof SET_TOTAL_USER_COUNT
    payload: number
}
type SetTotalUserCountACType = (payload: number) => SetTotalUserCountAction

export const setTotalUserCountAC: SetTotalUserCountACType = (payload) => ({type: SET_TOTAL_USER_COUNT, payload})

type MainAction = ToggleFollowAction | SetUsersAction | SetCurrentPageAction | SetTotalUserCountAction

export const usersReducer = (state = initState, action: MainAction): UsersStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(item => item.id == action.payload ? {...item, followed: !item.followed} : item)
            }
        case SET_USERS:
            return {...state, users: [...action.payload] }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload }
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.payload }
        default:
            return state
    }
}