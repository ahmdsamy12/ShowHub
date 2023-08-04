
import './App.css';
import Layout from './Layout/Layout';
import HeaderApp from './components/HeaderApp/HeaderApp';
import Home from './pages/Home/Home';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import TopMovies from './pages/TopMovies/TopMovies';
import PopularMovies from './pages/PopularMovies/PopularMovies';
import UpComingMovies from './pages/UpComingMovies/UpComingMovies';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/top" element={<TopMovies />} />
      <Route path="/pop" element={<PopularMovies />} />
      <Route path="/up" element={<UpComingMovies />} />
    </Route>
  )
);


function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
