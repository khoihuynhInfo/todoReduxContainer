import React, { Component } from 'react';
import TodoContainer from './../containers/TodoContainer';
import PropTypes from 'prop-types';

class TodoList extends Component {

    render() {
        const { todos = [] } = this.props;
        return (
            <ul>
                {this.showTodo(todos)}
            </ul>
        );
    }

    showTodo = todos => {
        return (todos && todos.length)
            ? todos.map((todo, index) => {
                return (
                    <TodoContainer
                        key={index}
                        todo={todo.todo}
                        id={todo.id}
                        kind={todo.kind}
                    />
                );
            })
            : [];
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList;
