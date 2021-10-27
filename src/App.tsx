import styles from './App.module.css'
import Header from "./components/Header/Header";

import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import React from "react";
import {StateType} from "./store/state";
import {Navbar} from "./components/Navbar/Navbar";

type AppPropsType = {
    state: StateType
    dispatch: (action: {type: string, payload: any}) => void
}

const  App: React.FC<AppPropsType> = ({state, dispatch}) => {

    return (

            <div className={styles.appWrapper}>
                <Header/>
                <Navbar state={state.sidebar}/>
                <div className={styles.content}>
                    <Route path={"/dialogs"} render={()=> <Dialogs state={state.dialogsPage} dispatch={dispatch}/>}/>
                    <Route path={"/profile"} render={()=> <Profile state={state.profilePage} dispatch={dispatch}/>}/>
                    <Route path={"/news"} render={()=> <News />}/>
                    <Route path={"/music"} render={()=> <Music />}/>
                    <Route path={"/settings"} render={()=> <Settings />}/>
                </div>

                {/*<Profile />*/}
            </div>

    );
}

export default App;
