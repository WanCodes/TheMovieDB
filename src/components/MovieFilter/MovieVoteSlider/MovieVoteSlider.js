import React from 'react';
import PropTypes from 'prop-types';
import Slider from "rc-slider";
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

const movieVoteSlider = (props) => {

    const Handle = Slider.Handle;

    const handle = (props) => {
        const { value, dragging, index, ...restProps } = props;
        return (
            <Tooltip
                prefixCls="rc-slider-tooltip"
                overlay={value}
                visible={dragging}
                placement="top"
                key={index}
            >
                <Handle value={value} {...restProps} />
            </Tooltip>
        );
    };

    return (
        <div className="filter__slider">
            
            <div className="slider_wrapper">
            <span>0</span>
            <Slider handle={handle} min={0} max={10} value={props.sliderVoteValue} onChange={props.onSlide} step={.5} />
            <span>10</span>
            </div>
        </div>
    );
}

movieVoteSlider.propTypes = {
    sliderVoteValue: PropTypes.number,
    onSlide: PropTypes.func,
}

export default movieVoteSlider;