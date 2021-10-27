import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {AppRootState, store} from "./store/redux-store";


const reRenderEntireTree = (state: AppRootState) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    reRenderEntireTree(store.getState())
})

reRenderEntireTree(store.getState())

reportWebVitals();


