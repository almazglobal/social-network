import {MessageUserType, PostUserType, StateType} from "./store";

const ADD_POST = 'ADD_POST';

export type AddPostAction = {
    type: string
    payload: string
}
type AddPostACType = (payload: string) => AddPostAction

export const addPostAC: AddPostACType = (payload) => ({type: ADD_POST, payload})

export const profileReducer = (state: { posts: PostUserType[] }, action: AddPostAction) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostUserType = {
                id: state.posts.length.toString(),
                text: action.payload,
                countLikes: 0,
            }
            state.posts.push(newPost)
            return state
        }
        default:
            return state
    }
}