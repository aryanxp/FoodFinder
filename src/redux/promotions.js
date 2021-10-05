import * as ActionTypes from './ActionTypes'
export const Promotions = (state={
    isLoading:true,
    promotions:[],
    errmess:null
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading:false, errmess:null, promotions:action.payload}
        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errmess:null, promotions:[]}
        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading:false, errmess:action.payload}
        default:
            return state;
    }
}