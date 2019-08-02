import {GET_ALL_PROFILES, ADD_PROFILE, GET_PROFILE_BY_ID} from '../constants';

const initialState = {
    isUpdate: false,
    data: []
};

const profiles = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_PROFILES:
            return {
                ...state,
                data: [...action.payload]
            }
        case ADD_PROFILE:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case GET_PROFILE_BY_ID:
            return {
                ...state,
                data: [{...action.payload}]
            }
        default:
            return state
    }
};
export default profiles