import {reRenderEntireTree} from "../render";

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

export let state: StateType = {
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

export let addPost = (textPost: string) => {
    const newPost = {
        id: state.profilePage.posts.length.toString(),
        text: textPost,
        countLikes: 0,
    }
    // state = {...state, profilePage: {posts: [...posts, newPost]}}
    state.profilePage.posts.push(newPost)
    reRenderEntireTree(state)
}