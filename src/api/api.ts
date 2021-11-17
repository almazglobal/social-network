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


export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    authMe() {
        return instance.get(`auth/me`)
    },

    getUserProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    setFollow(id:string) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    setUnFollow(id:string) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getStatusFollow(id:string) {

        return instance.get(`follow/${id}`)
            .then(response => response.data)
    },

}


