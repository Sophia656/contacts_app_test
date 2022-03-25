import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { contactAPI } from './contactApi';
import { usersAPI } from './usersApi';
import loginReducer from './loginSlice';

// create root reducer
const rootReducer = combineReducers({
    loginReducer,
    [contactAPI.reducerPath]: contactAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer
})

//create func for config redux store
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware()
            .concat(contactAPI.middleware)
            .concat(usersAPI.middleware)
        
    })
}

export type RootState = ReturnType<typeof rootReducer> //type of the state
export type AppStore = ReturnType<typeof setupStore> //type of the store
export type AppDispatch = AppStore['dispatch'] //type of the dispatch