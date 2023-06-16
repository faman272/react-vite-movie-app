import React, { useEffect, useState } from "react";
import Axios from "axios";

const CardDetail = (props) => {
  const { selectedMovie, onClose } = props;
  const [movieData, setMovieData] = useState(null);
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    Axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=ef0572d6`)
      .then((response) => setMovieData(response.data))
      .catch((error) => console.error(error));
  }, [props.selectedMovie]);

  const handleClose = () => {
    setModalOpen(false);
    onClose();
  };

  useEffect(() => {
    const modalElement = document.getElementById("movieDetail");
    if (modalElement && !modalElement.hasAttribute("open")) {
      modalElement.showModal();
    }
  }, []);

  return (
    <>
      <dialog id="movieDetail" className="modal">
        {movieData ? (
          <form method="dialog" className="modal-box w-11/12 max-w-5xl">
            <div className="grid grid-flow-col gap-8">
              <div className="">
                <img src={movieData.Poster} alt="" className="w-[296px]" />
              </div>
              <div className="">
                <div className="absolute right-0 mr-4">
                  <button
                    className="font-bold bg-slate-700 px-4 py-2 rounded-full"
                    onClick={handleClose}
                  >
                    ✖
                  </button>
                </div>
                <h2 className="font-bold text-lg py-4">
                  MOVIE : <span className="opacity-50">{movieData.Title}</span>
                </h2>
                <h3>
                  IMDB Rating :
                  <span className="opacity-50"> {movieData.imdbRating}</span>
                </h3>
                <h3>
                  Year : <span className="opacity-50">{movieData.Year}</span>
                </h3>
                <h3>
                  Language :
                  <span className="opacity-50"> {movieData.Language}</span>
                </h3>
                <h3>
                  Rated : <span className="opacity-50">{movieData.Rated}</span>
                </h3>
                <h3>
                  Released :
                  <span className="opacity-50">{movieData.Released}</span>
                </h3>
                <h3>
                  Runtime :{" "}
                  <span className="opacity-50">{movieData.Runtime}</span>
                </h3>
                <h3>
                  Genre : <span className="opacity-50">{movieData.Genre}</span>
                </h3>
                <h3>Director : <span className="opacity-50">{movieData.Director}</span></h3>
                <h3>
                  Actors : <span className="opacity-50">{movieData.Actors}</span>
                </h3>
                <h3>
                  Awards : <span className="opacity-50">{movieData.Awards}</span>
                </h3>
                <div className="">
                  <p>
                    Plot :{" "}
                    <span className="opacity-50">{movieData.Plot}</span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-gray-600">
            <div className="absolute z-10 -ml-2 h-8 w-8 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 16 16">
                <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path>
              </svg>
            </div>
            <div className="absolute top-4 h-5 w-4 animate-bounce border-l-2 border-gray-200" style={{ rotate: '-90deg' }}></div>
            <div className="absolute top-4 h-5 w-4 animate-bounce border-r-2 border-gray-200" style={{ rotate: '90deg' }}></div>
          </div>
        )}
      </dialog>
    </>
  );
};

export default CardDetail;
