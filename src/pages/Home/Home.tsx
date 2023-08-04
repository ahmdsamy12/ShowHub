import React from 'react'
import HeaderHome from './headerHome/headerHome';
import TopMovies from './TopMovies/TopMovies';
import PopMovies from './PopMovies/PopMovies';
import UpMovies from './UpComingMovies/UpMovies';
import Services from './Services/Services';

const Home = () => {
  return (
   <>
   <HeaderHome />
   <TopMovies />
   <PopMovies />
   <UpMovies />
   <Services />
   </>
  )
}

export default Home;