import React, { useState } from "react";
import CardDetail from "./CardDetail";

const CardMovies = (props) => {
  const { Poster, Title, Year, Type, imdbID } = props.movie;
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (imdbID) => {
    setSelectedMovie(imdbID);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="flex flex-col p-[10px] text-white bg-gray-700 cursor-pointer w-[280px] shadow-card-shadow mb-4" onClick={() => handleMovieSelect(imdbID)}>
        <img src={Poster} alt="" className="object-cover h-[296px] shadow-inner" />
        <p>{}</p>
        <span className="text-[18px] font-bold mt-4 text-center">
          {Title}
        </span>
        <div className="flex my-2 text-sm justify-between">
          <p>Year: {Year}</p>
          <p>Type: {Type}</p>
        </div>
      </div>
      
      {selectedMovie && (
        <CardDetail
          selectedMovie={selectedMovie}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default CardMovies;
