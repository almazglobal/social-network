import {createContext} from "react";
import {AppStoreType, store} from "./store/redux-store";

export const StoreContext = createContext<AppStoreType>(store)

type ProviderPropsType = {
    store: AppStoreType
}
export const Provider: React.FC<ProviderPropsType> = ({store, children}) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}