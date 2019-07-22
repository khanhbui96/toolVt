import callApi from '../ultils/callApi';
import { GET_ERRS } from '../constants';

export const loginUser = (data, func) => dispatch=>{
    callApi('post', '/users/login', data)
        .then(user=>{
            console.log(user)
            func()
        })
        .catch(err=>{
           dispatch({
               type: GET_ERRS,
               payload: err.response.data
           })
        })
};