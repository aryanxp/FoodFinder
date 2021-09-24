import { COMMENTS } from "../shared/comments";
import { DISHES } from "../shared/Dishes";
import { LEADERS } from "../shared/leaders";
import { PROMO } from "../shared/promotions";

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMO,
    leaders: LEADERS
}
// eslint-disable-next-line
export const Reducer = (state = initialState, action) => {
    return state
}