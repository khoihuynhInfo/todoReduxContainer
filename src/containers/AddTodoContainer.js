import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './../components/AddTodo';
import * as actions from './../actions/index';

class AddTodoContainer extends Component {
    render() {
        return (
            <AddTodo
                onAddTodoTest={this.props.onAddTodoTest}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onAddTodoTest: (todo) => dispatch(actions.addTodo(todo))
});

export default connect(
    null,
    mapDispatchToProps
)(AddTodoContainer);

