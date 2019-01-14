import React from 'react';
import PropTypes from 'prop-types';

const genreCheckBox = (props) => (
    <div className="checkbox">
        
        <input 
            type="checkbox"
            onChange={props.checkBoxClickHandler}
            checked={props.checked}
            id={props.id}
        />

        <label className={"filter__label " + (props.checked?"checked":null)} htmlFor={props.id}>{props.label}</label>
    </div>
);

genreCheckBox.propTypes = {
    id:PropTypes.number,
    label:PropTypes.string,
    checked:PropTypes.bool,
    checkBoxClickHandler: PropTypes.func
}

export default genreCheckBox;