import 'raf/polyfill';
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieList from './MovieList';
import MovieItem from "./MovieItem/MovieItem";

configure({adapter: new Adapter()});

describe('<MovieList />', () => {
    let wrapper;
    const moviesProps = [{
        "vote_count": 2191,
        "id": 297802,
        "video": false,
        "vote_average": 6.9,
        "title": "Aquaman",
        "popularity": 513.81,
        "poster_path": "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
        "original_language": "en",
        "original_title": "Aquaman",
        "genre_ids": [
            28,
            14,
            878,
            12
        ],
        "genres":["Action", "Fantasy", "Science Fiction", "Adventure"],
        "backdrop_path": "/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg",
        "adult": false,
        "overview": "Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.",
        "release_date": "2018-12-07"
    },{
        "vote_count": 920,
        "id": 324857,
        "video": false,
        "vote_average": 8.5,
        "title": "Spider-Man: Into the Spider-Verse",
        "popularity": 167.681,
        "poster_path": "/laMM4lpQSh5z6KIBPwWogkjzBVQ.jpg",
        "original_language": "en",
        "original_title": "Spider-Man: Into the Spider-Verse",
        "genre_ids": [
            28,
            12,
            16,
            878,
            35
        ],
        "genres":["Action", "Adventure", "Animation", "Science Fiction", "Comedy"],
        "backdrop_path": "/e7CE5vx4KqUuz0peKdHRVZB0Pn8.jpg",
        "adult": false,
        "overview": "Miles Morales is juggling his life between being a high school student and being Spider-Man. However, when Wilson \"Kingpin\" Fisk uses a super collider, another Spider-Man from another dimension, Peter Parker, accidentally winds up in Miles' dimension, joining others from across the \"Spider-Verse\".",
        "release_date": "2018-12-07"
    }];

    beforeEach(() => {
        wrapper = shallow(<MovieList />);
    });

    it('should render two <MovieItem /> element if movies has 1 object', () => {
        const expectedOutput = 
        '<div class="movie">' +
        '<img src="https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg" alt="Aquaman" class="movie__img"/>'+
        '<h5 class="movie__name">Aquaman</h5>'+
        '<div class="movie__genre"><h3>Genre</h3><p>Action, Fantasy, Science Fiction, Adventure</p></div>'+
        '</div>';

        wrapper.setProps({movies: moviesProps, filterGenres:[], filterVote:0});
        const realOutput = wrapper.find(MovieItem).at(0).html();
        expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
    });

    it('should render one <MovieItem /> Aquaman when filterGenres is [14]', () => {
        const expectedOutput = 
        '<div class="movie">' +
        '<img src="https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg" alt="Aquaman" class="movie__img"/>'+
        '<h5 class="movie__name">Aquaman</h5>'+
        '<div class="movie__genre"><h3>Genre</h3><p>Action, Fantasy, Science Fiction, Adventure</p></div>'+
        '</div>';

        wrapper.setProps({movies: moviesProps, filterGenres:[14], filterVote:0});
        const realOutput = wrapper.find(MovieItem).html();
        expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
    });
    
    it('should render one <MovieItem /> Spiderman when filterVote is 8', () => {
        const expectedOutput = 
        '<div class="movie">'+
        '<img src="https://image.tmdb.org/t/p/w500/laMM4lpQSh5z6KIBPwWogkjzBVQ.jpg" alt="Spider-Man: Into the Spider-Verse" class="movie__img"/>'+
        '<h5 class="movie__name">Spider-Man: Into the Spider-Verse</h5>'+
        '<div class="movie__genre"><h3>Genre</h3><p>Action, Adventure, Animation, Science Fiction, Comedy</p></div>'+
        '</div>';

        wrapper.setProps({movies: moviesProps, filterGenres:[], filterVote:8});
        const realOutput = wrapper.find(MovieItem).html();
        expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
    });
});