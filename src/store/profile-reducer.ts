import {PostUserType} from "./store";

const ADD_POST = 'ADD_POST';

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

const initState = {
    posts:  [
        {id: '1', text: 'My first post', countLikes: 122},
        {id: '2', text: 'React rules!', countLikes: 100500}
    ] as PostType[]
}

export const profileReducer = (state = initState, action: AddPostAction): typeof initState => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostUserType = {
                id: state.posts.length.toString(),
                text: action.payload,
                countLikes: 0,
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        default:
            return state
    }
}