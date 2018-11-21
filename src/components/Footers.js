import React, { Component } from 'react';
import FillterLink from './../containers/FillterLink';
import * as Types from './../constants/ActionsTypes';

class Footers extends Component {
    render() {
        return (
            <div>
                <label>Show:</label>
                <FillterLink filter={Types.visibilityFillter.SHOW_ALL}>All</FillterLink>
                <FillterLink filter={Types.visibilityFillter.SHOW_ACTIVE}>Active</FillterLink>
                <FillterLink filter={Types.visibilityFillter.SHOW_COMPLETED}>Completed</FillterLink>
            </div>
        );
    }
}

export default Footers;
