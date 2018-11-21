import React, { Component } from 'react';
import Todo from './../components/Todo';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TodoListContainer extends Component {
    render() {
        return (
            <Todo
                todo={this.props.todo}
                onChangeVisibilityTodo={this.props.onChangeVisibilityTodo}
                kind={this.props.kind}
            />
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeVisibilityTodo: () => dispatch(actions.changeVisibilityTodo(ownProps))
});



export default connect(
    null,
    mapDispatchToProps
)(TodoListContainer)