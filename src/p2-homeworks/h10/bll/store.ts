import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {textReducer} from "../../h12/bll/textReducer";

const rootReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    text: textReducer
})

const store = createStore(rootReducer)

export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store // for dev
