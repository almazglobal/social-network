import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET_USER_DATA'

export type SetUserDataAction = {
    type: typeof SET_USER_DATA
    payload: DataUserType
}
type SetUserDataACType = (payload: DataUserType) => SetUserDataAction

export const setUserData: SetUserDataACType = (payload: DataUserType) => ({type: SET_USER_DATA, payload})

export type DataAuthUserType = {
    resultCode: number
    messages: any[],
    data: {
        id: number | null,
        email: string | null,
        login: string | null
    }
}

export type DataUserType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

const initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
} as DataUserType

type MainAction = SetUserDataAction

export const authReducer = (state = initState, action: MainAction): typeof initState => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export const setUserDataThunkCreator = () => {
    return (dispatch: Dispatch) => usersAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0)
                dispatch(setUserData({...response.data.data, isAuth: true}))
        })
}