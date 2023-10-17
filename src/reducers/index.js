import handleCounter from "./counterReducer";
import { combineReducers } from "redux";
const rootReducer=combineReducers(
    {
        handleCounter:handleCounter,

    }
)
export default rootReducer