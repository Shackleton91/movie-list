import React from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import { MovieProvider } from "./context/movieContext";
import AddMovie from "./components/AddMovie"; 

const App = () => {
  return (
    <MovieProvider>
      <div>
        <Navbar />
        <MovieList />
    </div>
    <AddMovie/>
    </MovieProvider>
  )

}

export default App;
