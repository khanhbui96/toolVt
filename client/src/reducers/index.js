import {combineReducers} from 'redux';
import errs from './errs.reducer';
import profiles from './profiles.reducer'
const appReducer = combineReducers({
    errs,
    profiles
});

export default appReducer;