import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {MessageUserType, PostUserType, UsersType} from "./store";

const rootReducer = combineReducers({
    profilePage: dialogsReducer,
    dialogsPage: profileReducer,
    sidebar: sidebarReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)