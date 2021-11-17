import axios from "axios";
import {DataAuthUserType} from "../store/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
        {
            'API-KEY':
                '2faeeadf-a972-43b3-9979-4b95c4b5cd8d'
        },
})

export const getUsers = (currentPage = 1, pageSize = 5) => {
    return instance.get<DataAuthUserType>(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const authMe = () => {
    return instance.get(`auth/me`)
}

export const getUserProfile = (userId: string) => {
    return instance.get(`${userId}`)
        .then(response => response.data)
}
