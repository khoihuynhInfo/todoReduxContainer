import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from './../components/Link';
import * as actions from './../actions/index';

class FillterLink extends Component {

    render() {
        return (
            <Link
                onChangeVisibility={this.props.onChangeVisibility}
                visibilityStatus={this.props.visibilityStatus}
                onToggleVisibility={this.props.onToggleVisibility}
                filter={this.props.filter}
            >
                {this.props.children}
            </Link>
        );
    }
}

const mapSateToProps = state => ({
    todos: state.todos,
    visibilityStatus: state.visibilityStatus
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeVisibility: () => dispatch(actions.changeVisibility(ownProps)),
    onToggleVisibility: () => dispatch(actions.toggleVisibility(ownProps))
});


export default connect(
    mapSateToProps,
    mapDispatchToProps
)(FillterLink);


