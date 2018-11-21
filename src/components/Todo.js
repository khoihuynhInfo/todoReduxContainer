import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Types from './../constants/ActionsTypes';

class Todo extends Component {

    changeTodo = () => {
        this.props.onChangeVisibilityTodo();
    }

    render() {
        const { todo = '', kind = '' } = this.props;

        return (
            <li
                style={{
                    textDecoration: (kind === Types.visibilityFillter.SHOW_COMPLETED) 
                    ? 'line-through' 
                    : 'none'
                }}
                onClick={this.changeTodo}
            >{todo}</li>
        );
    }
}

Todo.propTypes = {
    todo: PropTypes.string.isRequired,
    kind:PropTypes.string.isRequired,
    onChangeVisibilityTodo: PropTypes.func.isRequired
}

export default Todo;
