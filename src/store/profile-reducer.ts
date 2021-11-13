import {PostUserType} from "./store";
import {SetUsersAction, ToggleFollowAction} from "./users-reducer";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type SetUserProfileAction = {
    type: typeof SET_USER_PROFILE
    payload: ProfileType | null
}
type SetUserProfileACType = (payload: ProfileType | null) => SetUserProfileAction

export const setUserProfile: SetUserProfileACType = (payload) => ({type: SET_USER_PROFILE, payload})

export type AddPostAction = {
    type: typeof ADD_POST
    payload: string
}
type AddPostACType = (payload: string) => AddPostAction

export const addPostAC: AddPostACType = (payload) => ({type: ADD_POST, payload})

export type PostType = {
    id: string
    text: string
    countLikes: number
}
export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: string | null,
    photos: {
        small: string | null,
        large: string | null,
    }
}
const initState = {
    posts: [
        {id: '1', text: 'My first post', countLikes: 122},
        {id: '2', text: 'React rules!', countLikes: 100500}
    ] as PostType[],
    profile: null as ProfileType | null,
}

type MainAction = AddPostAction | SetUserProfileAction

export const profileReducer = (state = initState, action: MainAction): typeof initState => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostUserType = {
                id: state.posts.length.toString(),
                text: action.payload,
                countLikes: 0,
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.payload}
        }
        default:
            return state
    }
}