import React from 'react';
import PropTypes from 'prop-types';
import GenreCheckBoxes from "./GenreCheckBox/GenreCheckBox";
import MovieVoteSlider from "./MovieVoteSlider/MovieVoteSlider";
import { CompareValues } from "../../shared/utils";
import "./MovieFilter.css";

const movieFilter = (props) => {

    let genreCheckBoxes = null;
    if (props.availableGenres) {
        let sortedGenres = props.availableGenres.sort(CompareValues('name')); //sort genres by name
        
        genreCheckBoxes = sortedGenres.map(genre => {
            return <GenreCheckBoxes
                key={genre.id}
                id={genre.id}
                label={genre.name}
                checked={genre.checked}
                checkBoxClickHandler={props.checkBoxClickHandler}
            />
        })
    }
    console.log(props.showFilter);
    let attachedClasses = ["filter", "filter_close"];
    if (props.showFilter) {
        attachedClasses = ["filter", "filter_open"];
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <h1>Movie Filter</h1>
            <h2>Movies voted {props.sliderVoteValue}+</h2>
            <MovieVoteSlider sliderVoteValue={props.sliderVoteValue} onSlide={props.onSlide} />

            <h2>Genres</h2>
            <div className="filter__checkboxs">
            
                {genreCheckBoxes}
            </div>
            <div className="filter_close_btn" onClick={props.hideFilterHandler}><h1>&#8679;</h1></div>
        </div>
    );
}

movieFilter.propTypes = {
    availableGenres: PropTypes.array,
    checkBoxClickHandler: PropTypes.func,
    sliderVoteValue: PropTypes.number,
    onSlide: PropTypes.func,
    showFilter: PropTypes.bool,
    hideFilterHandler: PropTypes.func
}

export default movieFilter;