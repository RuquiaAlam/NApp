import React from 'react'

import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies =useSelector((store)=>store.movies)

  return (
    movies.nowPlayingMovies &&
   
    (
    <div className=" bg-black">
      <div  className="-mt-52 relative z-20" >
      {/* -Movie List
      Movie Cards *n
        -Popular
        -Now Playing 
        -Trending
        -Horror
        -Romcom */}
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.trendingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upComingMovies}/>

      

    </div>
      </div>)
  )
}

export default SecondaryContainer