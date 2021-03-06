import favouritesReducer from "./favreducer";
import {combineReducers} from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    addFavourite: favouritesReducer
})  

export default persistReducer(persistConfig, rootReducer);