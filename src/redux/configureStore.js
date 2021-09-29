import { createStore, combineReducers, applyMiddleware} from "redux";
import { createForms } from "react-redux-form";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promo } from "./promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () =>{
    return createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promo: Promo,
            ...createForms({
                feedback:InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    )
    
}