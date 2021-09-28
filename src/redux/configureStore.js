import { createStore, combineReducers, applyMiddleware} from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promo } from "./promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () =>{
    return createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promo: Promo
        }),
        applyMiddleware(thunk, logger)
    )
    
}