import axios from 'axios';
import {GET_ALL_PROFILES, ADD_PROFILE, GET_PROFILE_BY_ID} from '../constants';
import callApi from '../ultils/callApi';
import setAuthHeader from '../ultils/setAuthHeader'
export const createProfile = (data) => async dispatch=>{
    try{
        setAuthHeader(localStorage.getItem('jwt'))
        const profile = await axios({
            method: 'post',
            url: 'http://localhost:5000/api/profiles/create',
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await dispatch ({
            type: ADD_PROFILE,
            payload: profile.data
        })
    }catch(err){
        console.log(err)
    }
};
export const getAllProfiles = () => async dispatch=>{
    try{
        setAuthHeader(localStorage.getItem('jwt'))
        const profiles = await callApi('get', '/profiles/getAllProfiles', null);
        await dispatch({
            type: GET_ALL_PROFILES,
            payload: profiles.data
        })
    }catch(err){
        console.log(err)
    }
};
export const getProfileById = (id) => async dispatch=>{
    try{
        setAuthHeader(localStorage.getItem('jwt'))
        const profile = await callApi('get', `/profiles/${id}`, null);
        await dispatch({
            type: GET_PROFILE_BY_ID,
            payload: profile.data
        })
    }catch(err){
        console.log(err)
    }
};