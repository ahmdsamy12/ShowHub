import React from 'react'
import { useAppDispatch, useAppSelector } from '../../features/store';
import { getPopMovies } from '../../features/slices/PopMoviesSlice';
import {useEffect} from "react"
import MainPageHead from '../../components/MainPageHead/MainPageHead';


interface movieT {
  id: number;
  poster_path: string;
  title: string;
}

const PopularMovies = () => {
  const PopMovies = useAppSelector((state) => state.pop)
  console.log(PopMovies);
  

const dispatch = useAppDispatch();

useEffect(() => {
dispatch(getPopMovies())
}, [])

return (
<div className='p-10'>
  <MainPageHead title='Popular Movies' />
  <div className='grid grid-cols-grid-260 gap-5'>
  {PopMovies.map((movie: movieT) => (
      <div key={movie.id}>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className=' rounded-3xl'/>
      <h2 className=' bg-prim-color text-second-color text-center p-2 m-2 rounded-xl'>{movie.title}</h2>
    
    </div>
  ))}
 </div>
 
</div>
)
}

export default PopularMovies