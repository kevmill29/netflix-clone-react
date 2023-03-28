To run this app you will need to Node.js and vite installed.

Node.js install:
https://nodejs.org/en/download

For Linux:
https://nodejs.org/en/download/package-manager


Once Node is installed, next use terminal to install vite:

 npm create vite@latest
 cd vite-project
 npm install
 npm run build

Visit local host displayed within terminal to view site. 


Thank you for viewing my project.
This project is a remake of Netflix using the TMDB API and Axios to fetch the data from API. I built this project to gain an understanding of how does React work with API's in contrast to using vanilla javascript to render data from an API. This project is mostly built on React and javascript. 

Creating a seperate javascript file with Axios called axios.js and using it as the base url for the API call for example:

import axios from 'axios'

const instance = axios.create({
    baseURL:"insert url here",
})

export default instance

And also creating a seperate javascript file requests.js and creating the api request url query strings IE:

// API Key 81700d9e246363c42106cc78501c81e4

const API_KEY =  "81700d9e246363c42106cc78501c81e4"

const requests = {
     fetchTrender: `trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
     fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
     fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
     fetchNetflixOriginals:`discover/tv?api_key=${API_KEY}&with_networks=213`
}



export default requests;

Learning this part got the hardest part out of the way of coding this project but also does create some complications if the everything is not spelled correctly when attempting to render the code that is needed. I have broken this app several times due to misspelled attributes and variables that were called inside a few of the components.

This is project was deployed using firebase, let me know what you think about this!
