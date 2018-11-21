import React, { Component } from 'react';
import TodoList from './../components/TodoList';
import { connect } from 'react-redux';

class TodoListContainer extends Component {
    render() {
        return (
            <TodoList
                todos={this.props.todos}
            />
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});



export default connect(
    mapStateToProps,
    null
)(TodoListContainer)