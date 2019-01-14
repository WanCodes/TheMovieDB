import React from 'react';
import PropTypes from 'prop-types';

const topBar = (props) => {
    return (
        <div className="topbar" onClick={props.showFilter}>
            <div className="topbar__title"><h1>The MovieDB Challenge</h1></div>
            <div className="topbar__filter"><h1>Movie Filter &#8681;</h1></div>
        </div>
    );
}

topBar.propTypes = {
    showFilter: PropTypes.func,
}

export default topBar;