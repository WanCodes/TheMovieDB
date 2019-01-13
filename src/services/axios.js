import axios from 'axios';

export const baseUrl = "https://api.themoviedb.org";

export default {
    getNowPlaying: () =>
        axios
            .get(`${baseUrl}/3/movie/now_playing`, {
                params: {
                    page: "1",
                    api_key: process.env.REACT_APP_DEV_API_KEY,
                    language: "en-US"
                }
            })
            .then(res => res.data)
            .catch(error => console.log(error)),
    
    getGenres: () =>
            axios
              .get(`${baseUrl}/3/genre/movie/list`, {
                params: { api_key: process.env.REACT_APP_DEV_API_KEY }
              })
              .then(res => res.data.genres)
              .catch(error => console.log(error))
}