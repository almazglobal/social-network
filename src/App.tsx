import styles from './App.module.css'
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import React from "react";
import {StateType} from "./store/state";

type AppPropsType = {
    state: StateType
}

const  App: React.FC<AppPropsType> = ({state}) => {

    return (
        <BrowserRouter>
            <div className={styles.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={styles.content}>
                    <Route path={"/dialogs"} render={()=> <Dialogs state={state.dialogsPage}/>}/>
                    <Route path={"/profile"} render={()=> <Profile state={state.profilePage}/>}/>
                    <Route path={"/news"} render={()=> <News />}/>
                    <Route path={"/music"} render={()=> <Music />}/>
                    <Route path={"/settings"} render={()=> <Settings />}/>
                </div>

                {/*<Profile />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
