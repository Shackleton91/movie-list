import React, { useState, useContext} from 'react';
import { MovieContext } from "../../context/movieContext";

const AddMovie = () => {

    const [name, setName] = useState(" ");
    const [price, setPrice] = useState(" ");
    const [movies, setMovies] = useContext(MovieContext); 
  

    const updateName = e => {
        setName(e.target.value)
    }

    const updatePrice = e => {
        setPrice(e.target.value)
    }

    const AddMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies,  {name: name, price: price}]) 
    }
    // will prevent the page from reloading when data entered in form

    return (
    <form onSubmit={AddMovie}>
      <input type="text" name={name} onChange={updateName}/>
      <input type="text" name={price}  onChange={updatePrice}/>
      <input type="submit" />
    </form>
  )
}

export default AddMovie

