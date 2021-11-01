export type UsersType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    avatarPhoto: string
    location: {
        city: string,
        country: string,
    }
}

const initState: {users: UsersType[]} = {
    users: [
        // {id: '1', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: true, fullName: 'Alex', status: 'Driven', location: {city: 'Samara', country: 'Russia'}},
        // {id: '2', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: false, fullName: 'Bob', status: 'Living', location: {city: 'New-York', country: 'America'}},
        // {id: '3', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: true, fullName: 'John', status: 'Busy', location: {city: 'Chicago', country: 'America'}},
        // {id: '4', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: true, fullName: 'Ann', status: 'Homework', location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: '5', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: false, fullName: 'Ivan', status: 'Driven', location: {city: 'Moscow', country: 'Russia'}},
        // {id: '6', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: true, fullName: 'Misha', status: 'Driven', location: {city: 'Kazan', country: 'Russia'}},
        // {id: '7', avatarPhoto: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', followed: true, fullName: 'Katy', status: 'Driven', location: {city: 'Minsk', country: 'Belarus'}},
    ]
}

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

export type ToggleFollowAction = {
    type: string
    payload: string
}
type ToggleFollowACType = (payload: string) => ToggleFollowAction

export const toggleFollowAC: ToggleFollowACType = (payload) => ({type: TOGGLE_FOLLOW, payload})

export type SetUsersAction = {
    type: string
    payload: UsersType[]
}
type SetUsersACType = (payload: UsersType[]) => SetUsersAction

export const setUsersAC: SetUsersACType = (payload) => ({type: SET_USERS, payload})


export const usersReducer = (state = initState, action: any): typeof initState => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(item => item.id == action.payload ? {...item, followed: !item.followed} : item)
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.payload] }
        default:
            return state
    }
}