import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store, StoreType} from "./store/state";
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";


const reRenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(reRenderEntireTree)

reRenderEntireTree(store.getState())

reportWebVitals();


