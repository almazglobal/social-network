import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export type UsersType = {
    name: string
    id: string
}

export type MessageUserType = {
    text: string
    id: string
}

export type PostUserType = {
    text: string
    id: string
    countLikes: number
}

export type StateType = {
    profilePage: {
        posts: PostUserType[]
    }
    dialogsPage: {
        users: UsersType[]
        messages: MessageUserType[]
    }
    sidebar: {
        friends: UsersType[]
    }
}

const posts: PostUserType[] = [
    {id: '1', text: 'My first post', countLikes: 122},
    {id: '2', text: 'React rules!', countLikes: 100500}
]

const users: UsersType[] = [
    {id: '1', name: 'Alex'},
    {id: '2', name: 'Sasha'},
    {id: '3', name: 'Bob'},
]

const friends: UsersType[] = [
    {id: '1', name: 'Alex'},
    {id: '2', name: 'Sasha'},
]

const messages: MessageUserType[] = [
    {id: '1', text: 'Hello'},
    {id: '2', text: 'Yo'},
    {id: '3', text: 'Bye'},
]

/*
const state: StateType = {
    profilePage: {
        posts,
    },
    dialogsPage: {
        users,
        messages,
    },
    sidebar: {
        friends,
    }
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: { type: string, payload: any }) => void
}

export const store: StoreType = {
    _state: state,
    _callSubscriber(state) {
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar =  sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    },
}
*/

