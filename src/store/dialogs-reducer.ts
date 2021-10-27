import {MessageUserType, StateType, UsersType} from "./store";

const SEND_MESSAGE = 'SEND_MESSAGE';


export type SendMessageAction = {
    type: string
    payload: string
}

type SendMessageACType = (payload: string) => SendMessageAction

export const sendMessageAC: SendMessageACType = (payload) => ({type: SEND_MESSAGE, payload})

export const dialogsReducer = (state: {
    users: UsersType[]
    messages: MessageUserType[]
}, action: SendMessageAction) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage: MessageUserType = {
                id: state.messages.length.toString(),
                text: action.payload,
            }
            state.messages.push(newMessage)
            return state
        }
        default:
            return state
    }
}