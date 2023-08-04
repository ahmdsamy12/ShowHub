import { getMovies } from "../../features/slices/MoviesSlice";
import {useEffect} from "react"
import { useAppDispatch, useAppSelector } from "../../features/store";
import MainPageHead from "../../components/MainPageHead/MainPageHead";



interface movieT {
  id: number;
  poster_path: string;
  title: string;
}


const TopMovies = () => {
  const movies = useAppSelector((state) => state.movies)
      
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies())
  }, [])
  return (
    <div className='p-10'>
   <MainPageHead title="Top Movies" />
    <div className='grid grid-cols-grid-260 gap-5'>
    {movies.map((movie: movieT) => (
     
        <div key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className=' rounded-3xl'/>
        <h2 className=' bg-prim-color text-second-color text-center p-2 m-2 rounded-xl'>{movie.title}</h2>
      
      </div>
    ))}
    </div>
  </div>
  )
}

export default TopMovies