import * as Types from './../constants/ActionsTypes';

const initialState = Types.visibilityFillter.SHOW_ALL;

const visibilityStatus = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_VISIBILITY:
            return action.payload.filter;
        default:
            return state;
    }
}

export default visibilityStatus;
