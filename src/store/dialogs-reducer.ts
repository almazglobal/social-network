import {MessageUserType} from "./store";

const SEND_MESSAGE = 'SEND_MESSAGE';


export type SendMessageAction = {
    type: string
    payload: string
}

type SendMessageACType = (payload: string) => SendMessageAction

export const sendMessageAC: SendMessageACType = (payload) => ({type: SEND_MESSAGE, payload})

const initState = {
    messages: [
        {id: '1', text: 'Hello'},
        {id: '2', text: 'Yo'},
        {id: '3', text: 'Bye'},
    ],
    users: [
    {id: '1', name: 'Alex'},
    {id: '2', name: 'Sasha'},
    {id: '3', name: 'Bob'},
    ]
}

export const dialogsReducer = (state = initState, action: SendMessageAction): typeof  initState => {
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