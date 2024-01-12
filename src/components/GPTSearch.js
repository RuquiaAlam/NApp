import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
      {/* GptSearchbar ,button
      Gpt movie suggestions list */}


<div className="absolute -z-10 " >
    <img src={BACKGROUND_IMG} alt="img_background"/>
    </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>

    </div>
  )
}

export default GPTSearch