import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";

function NewList({ genreId }) {
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMoviesById(genreId).then(resp => {
      setNewList(resp.data.results);
    }).catch(error => {
      console.error("Error fetching movies:", error);
    });
  };

  return (
    <div className="flex  overflow-x-auto gap-5 px-4 py-4 your-container cursor-pointer">
      {newList.map((item, index) => (
        <div className="flex flex-col gap-3 transition-all duration-200 ease-in-out hover:scale-105">
        <div className="flex w-[330px] h-[200px] gap-3 overflow-x-auto rounded-md bg-amber-100 hover:border-[2px] border-gray-100 transition-all duration-100">
          <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}  alt="" />
        </div>
        <div className="text-white font-bold">
        <h2 key={index}>{item.title}</h2>
        </div>
        </div>
      ))}
    </div>
  );
}

export default NewList;
