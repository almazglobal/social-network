import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType} from "./store/state";
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";


export const reRenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
    addPost={addPost} />
    </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
}

reportWebVitals();