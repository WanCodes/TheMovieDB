import React, { Component } from 'react';
import axios from '../../services/axios';

import TopBar from "../../components/TopBar/TopBar";
import MovieFilter from "../../components/MovieFilter/MovieFilter";
import MovieList from "../../components/MovieList/MovieList";

class MoviePage extends Component {

    state = {
        movies: [],            //Movies list from API
        genres: [],             //Genres from the API
        availableGenres: [],    //Genres from the results {id:1, name:"Action", checked=false}
        checkedGenres: [],       //array of checked genres, example [1, 3, 28]
        sliderVoteValue: 3,
        filterShow:false
    }

    /*
        Load Data from API and store in states
    */
    componentDidMount() {
        axios.getGenres()   //Call the getGenres API
            .then(genres => {
                this.setState({ genres });      //Store the genres response
                return axios.getNowPlaying();   //Call the Now Playing API
            }).then(response => {
                let allGenres = []; //temperary store all genres into an array

                //modify data object to have extra property "genres" containing array of genre names
                let dataWithGenres = response.results.map(result => {
                    result.genres = result.genre_ids.map(id => {
                        let _genre = this.state.genres.find(g => g.id === id);
                        _genre.checked = false; //used for filter by genres
                        allGenres.push(_genre); //used to filter genres
                        return _genre.name
                    })
                    return result;
                });

                this.setState({ movies: dataWithGenres, availableGenres: [...new Set(allGenres)] })
            })
            .catch(err => console.log(err));
    }

    /*
        Handle filtering by genre
    */
    checkBoxClickHandler = event => {
        let newCheckedGenres = [];
        let updatedGenres = this.state.availableGenres.map(gen => {
            if ((gen.id === parseInt(event.target.id))) {
                gen.checked = !gen.checked;
            }
            if (gen.checked) newCheckedGenres.push(gen.id);
            return gen
        })

        this.setState({ availableGenres: updatedGenres, checkedGenres: newCheckedGenres });
    }
    /*
        Handle filtering by votes using slider
    */
    voteSliderHandler = value => {
        this.setState({ sliderVoteValue: parseFloat(value) });
    }
    /*
        Handle filtering by votes using slider
    */
    showFilterHandler = () =>{
        this.setState( ( prevState ) => {
            return { filterShow: !prevState.filterShow };
        });
    }
    hideFilterHandler = () => {
        this.setState({filterShow:false});
    }

    
    render() {
        return (
            <>
                <TopBar showFilter={this.showFilterHandler}/>

                <MovieFilter 
                    showFilter={this.state.filterShow}
                    hideFilterHandler={this.hideFilterHandler}
                    availableGenres={this.state.availableGenres}
                    checkBoxClickHandler={this.checkBoxClickHandler}
                    sliderVoteValue={this.state.sliderVoteValue}
                    onSlide={this.voteSliderHandler}
                />

                <MovieList 
                    movies={this.state.movies}
                    filterGenres={this.state.checkedGenres}
                    filterVote={this.state.sliderVoteValue}
                />
            </>
        );
    }
}

export default MoviePage;