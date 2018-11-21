import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {

    onClick = () => {
        // change state 
        this.props.onChangeVisibility();
        // toggle kind
        this.props.onToggleVisibility();
    }

    render() {
        const { filter = '', visibilityStatus = '' } = this.props;
        return (
            <button
                onClick={this.onClick}
                style={{ margin: '2px' }}
                disabled={(filter === visibilityStatus) ? true : false}
            >
                {this.props.children}
            </ button>
        );
    }
}

Link.propTypes = {
    onChangeVisibility: PropTypes.func.isRequired,
    onToggleVisibility: PropTypes.func.isRequired
}

export default Link;
