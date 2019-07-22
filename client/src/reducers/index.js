import {combineReducers} from 'redux';
import errs from './errs.reducer';

const appReducer = combineReducers({
    errs
});

export default appReducer;