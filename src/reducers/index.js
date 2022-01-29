import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter','isLogged']
}

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})  

export default persistReducer(persistConfig, rootReducer);