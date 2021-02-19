import {combineReducers} from 'redux';
import authorsReducer from './authors_reducers';

const entitiesReducer = combineReducers({
    authors: authorsReducer
});

export default entitiesReducer;