import callApi from '../ultils/callApi';
import { GET_ERRS } from '../constants';

export const loginUser = (data, func) => async dispatch=>{
    try{
        const User = await callApi('post', '/users/login', data)
        localStorage.setItem('jwt', User.data.token)
        await func()
    }catch(err){
        await dispatch({
            type: GET_ERRS,
            payload: err.response.data
        })
    }
};