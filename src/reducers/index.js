import { combineReducers } from 'redux';
import todos from './todos';
import visibilityStatus from './visibilityStatus';

const rootReducer = combineReducers({
    todos,
    visibilityStatus
});

export default rootReducer;