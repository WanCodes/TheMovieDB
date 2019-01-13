import React from 'react';
import PropTypes from 'prop-types';

const movieItem = (props) => {
    return (
        <div className="movie">
            <img src={props.imageURL} alt={props.title} className="movie__img" />
            <h5 className="movie__name">{props.title}</h5>
            <div className="movie__genre">
                <h3>Genre</h3>
                <p>{props.genres.join(", ")}</p>
            </div>
        </div>
    );
}

movieItem.propTypes = {
    imageURL: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array
}

export default movieItem;