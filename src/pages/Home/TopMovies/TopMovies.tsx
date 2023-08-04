import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../features/store';
import { getMovies } from '../../../features/slices/MoviesSlice';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { Link } from 'react-router-dom';



interface movieT {
  id: number;
  poster_path: string;
  title: string;
}

const TopMovies = () => {

  const movies = useAppSelector((state) => state.movies).slice(0, 8)
      
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  return (
    <div className='p-10'>
      <MainTitle title='Top Movies' />
      <div className='grid grid-cols-grid-260 gap-5'>
      {movies.map((movie: movieT) => (
       
          <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className=' rounded-3xl'/>
          <h2 className=' bg-prim-color text-second-color text-center p-2 m-2 rounded-xl'>{movie.title}</h2>
        
        </div>
      ))}
      </div>
      <div className=' my-5 mx-auto w-fit rounded-2xl flex justify-center items-center'>
      <Link to="/top" className=' rounded-xl bg-second-color border-2 border-prim-color hover:bg-prim-color hover:text-second-color text-prim-color py-2 px-5 m-auto w-full flex justify-center items-center'>see more</Link>
      </div>
    </div>
  )
}

export default TopMovies;