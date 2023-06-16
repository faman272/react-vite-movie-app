import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CardMovies from "./components/CardMovies";
import NoSearch from "../public/img/search-movies.png"
import CardDetail from "./components/CardDetail";


const App = () => {
  const [search, updateSearch] = useState("");
  const [timeoutID, updateTimeout] = useState();
  const [movielist, updateMoviesList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const fetchData = async (searchValue) => {
    const URL = `https://www.omdbapi.com/?s=${searchValue}&apikey=ef0572d6`;
    const OPTIONS = { method: "GET" };

    const response = await fetch(URL, OPTIONS);
    const data = await response.json();
    if (data && data.Search) {
      updateMoviesList(data.Search);
    } else {
      updateMoviesList([]);
    }
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutID);
    updateSearch(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeout(timeout);
  };

 
  

  return (
    <>
      <Navbar change={onTextChange} value={search}/>
      {selectedMovie && <CardDetail selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <div className="flex flex-wrap justify-evenly items-center m-8">
        {movielist.length ? (
          movielist.map((movie, index) => (
            <CardMovies key={index} movie={movie} onMovieSelect={onMovieSelect} />
          ))
        ) : (
          <div className="flex flex-col items-center">
          <img src={NoSearch} alt="" className="w-1/2 opacity-30" />
          <h1 className="font-bold text-4xl text-black opacity-30">Search a Movie..</h1>
        </div>
        
        )}
      </div>
    </>
  );
};

export default App;
