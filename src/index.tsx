import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, StoreType} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {store} from "./store/redux-store";


const reRenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(reRenderEntireTree)

reRenderEntireTree(store.getState())

reportWebVitals();


