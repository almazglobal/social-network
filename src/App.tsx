import styles from './App.module.css'
import Header from "./components/Header/Header";

import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import {AppStoreType} from "./store/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: AppStoreType
}

const  App: React.FC<AppPropsType> = ({store}) => {

    const state = store.getState()

    return (

            <div className={styles.appWrapper}>
                <Header/>
                <Navbar store={store}/>
                <div className={styles.content}>
                    <Route path={"/dialogs"} render={()=> <DialogsContainer store={store}/>}/>
                    <Route path={"/profile"} render={()=> <Profile store={store}/>}/>
                    <Route path={"/news"} render={()=> <News />}/>
                    <Route path={"/music"} render={()=> <Music />}/>
                    <Route path={"/settings"} render={()=> <Settings />}/>
                </div>

                {/*<Profile />*/}
            </div>

    );
}

export default App;
