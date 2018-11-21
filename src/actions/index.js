import * as Types from './../constants/ActionsTypes';
let id = 0;
export const addTodo = (payload = '') => ({
    type: Types.ADD_TODO,
    payload,
    id: id++
})

export const changeVisibility = payload => ({
    type: Types.CHANGE_VISIBILITY,
    payload
})

export const toggleVisibility = payload => ({
    type: Types.TOGGLE_TODO,
    payload
})

export const changeVisibilityTodo = payload => ({
    type: Types.CHANGE_VISIBILITY_TODO,
    payload
})