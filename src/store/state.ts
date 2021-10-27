const ADD_POST = 'ADD_POST';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
        switch (action.type) {
            case ADD_POST: {
                const newPost: PostUserType = {
                    id: this._state.profilePage.posts.length.toString(),
                    text: action.payload,
                    countLikes: 0,
                }
                this._state.profilePage.posts.push(newPost)
                this._callSubscriber(this._state)
                break
            }
            case SEND_MESSAGE: {
                const newMessage: MessageUserType = {
                    id: this._state.dialogsPage.messages.length.toString(),
                    text: action.payload,
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._callSubscriber(this._state)
                break
            }
        }
    },
}

export type AddPostAction = {
    type: string
    payload: string
}
type AddPostACType = (payload: string) => AddPostAction

export const addPostAC
    :
    AddPostACType = (payload) => ({type: ADD_POST, payload})

export type SendMessageAction = {
    type: string
    payload: string
}

type SendMessageACType = (payload: string) => SendMessageAction

export const addMessageAC: SendMessageACType = (payload) => ({type: SEND_MESSAGE, payload})
