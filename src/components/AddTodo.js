import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {

    onSubmit = (event) => {
        event.preventDefault();
        let todo = this.refs.todo.value;
        if (todo.trim()) {
            this.props.onAddTodoTest(todo)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="todo"
                        ref="todo" />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {
    onAddTodoTest: PropTypes.func
}
