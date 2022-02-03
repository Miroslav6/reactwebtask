import counterReducer from "./counter";
import {combineReducers} from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter']
}

const rootReducer = combineReducers({
    addFavourite: counterReducer
})  

export default persistReducer(persistConfig, rootReducer);