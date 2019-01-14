import React from 'react';
import PropTypes from 'prop-types';
import { ArrayContainsArray, CompareValues } from "../../shared/utils";

import MovieItem from "./MovieItem/MovieItem";

const movieList = (props) => {
    let moviesJSX = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (props.movies) {

        let filteredResults = props.movies;

        if (props.filterGenres.length > 0) {
            filteredResults = props.movies.filter(item => {
                return ArrayContainsArray(item.genre_ids, props.filterGenres);
            });
        }
        if(props.filterVote)
        filteredResults = filteredResults.filter(item => item.vote_average >= props.filterVote);

        filteredResults.sort(CompareValues('popularity', 'desc')); //sort by most popular first

        moviesJSX = filteredResults.map(result => 
                <MovieItem 
                key={result.id}
                title={result.title}
                imageURL={"https://image.tmdb.org/t/p/w500" + result.poster_path}
                genres={result.genres}
                />
        );
    }
    return (
        <section className="movies">
            {moviesJSX}
        </section>
    );
}

movieList.propTypes = {
    movies: PropTypes.array,
    filterGenres: PropTypes.array,
    filterVote: PropTypes.number
}



export default movieList;