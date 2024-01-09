import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
//modular coding or separation of concerns

const useMovieTrailer=(movieId)=>
{
    const dispatch=useDispatch();
//fetching trailer video and updating the store with trailer video data
const getMovieVideos= async()=>
{
  const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);

  const json= await data.json();
  console.log(json);

const filterData=json.results.filter((video) =>video.type ==="Trailer");
const trailer = filterData.length ? filterData[0]:json.results[0];


console.log(trailer);

// setTrailerId(trailer.key);
dispatch(addTrailerVideo(trailer));
};

useEffect(()=>
{
getMovieVideos();
},[]);


}
export default useMovieTrailer;
