import React from 'react'
import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpComingMovies();


  return (
    <div>
      <Header/>
      {
      showGptSearch ? <GPTSearch/>:
     <>
      <MainContainer/>
      <SecondaryContainer/>
     </>
      }
 




    </div>
  )
}

export default Browse