import userReducer  from "./userReducer"
import {firebaseReducer} from "react-redux-firebase"
import {combineReducers} from "redux"

export default combineReducers({
    accountState : userReducer,
    firebase : firebaseReducer
})
