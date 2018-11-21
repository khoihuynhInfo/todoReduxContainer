import * as Types from './../constants/ActionsTypes';

const dataLocalStore = JSON.parse(
    localStorage.getItem('todos')
);

const initialState = dataLocalStore ? dataLocalStore : [];

const todos = (state = initialState, action) => {

    switch (action.type) {
        case Types.ADD_TODO:
            const newTodos = [
                ...state,
                {
                    id: action.id,
                    todo: action.payload,
                    kind: Types.visibilityFillter.SHOW_ALL
                }
            ];
            localStorage.setItem('todos',
                JSON.stringify([...newTodos])
            );
            return [...newTodos];

        case Types.CHANGE_VISIBILITY_TODO:
            state.find(e => {
                if (e.id === action.payload.id) {
                    e.kind = Types.visibilityFillter.SHOW_COMPLETED
                }
            });
            localStorage.setItem('todos', JSON.stringify(state));
            return [...state];

        case Types.TOGGLE_TODO:
            const localTodos = JSON.parse(localStorage.getItem('todos'));
            if (localTodos && localTodos.length) {
                switch (action.payload.filter) {
                    case Types.visibilityFillter.SHOW_ACTIVE:
                        return [...localTodos].filter(e =>
                            e.kind !== Types.visibilityFillter.SHOW_COMPLETED
                        );
                    case Types.visibilityFillter.SHOW_COMPLETED:
                        return [...localTodos].filter(e =>
                            e.kind === action.payload.filter
                        );
                    default:
                        return [...localTodos];
                }
            } return [];
        default:
            return [...state];
    }
}

export default todos;
