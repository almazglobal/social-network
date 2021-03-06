import styles from './App.module.css'
import {Route} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import React from "react";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";

const  App: React.FC = () => {

    return (

            <div className={styles.appWrapper}>
                <HeaderContainer/>
                <NavbarContainer />
                <div className={styles.content}>
                    <Route path={"/dialogs"} render={()=> <DialogsContainer />}/>
                    <Route path={"/profile/:userId?"} render={()=> <ProfileContainer />}/>
                    <Route path={"/news"} render={()=> <News />}/>
                    <Route path={"/music"} render={()=> <Music />}/>
                    <Route path={"/settings"} render={()=> <Settings />}/>
                    <Route path={"/users"} render={()=> <UsersContainer />}/>
                    <Route path={"/login"} render={()=> <Login />}/>
                </div>

                {/*<Profile />*/}
            </div>

    );
}

export default App;
