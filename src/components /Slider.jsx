import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos().then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth-110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth-110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[50px] absolute mx-5 mt-[300px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[50px] absolute mx-5 mt-[300px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto px-16 py-4 your-container scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL+item.backdrop_path}
            className="min-w-[100%] md:h-[610px] object-cover  mr-5 rounded-md hover:border-[4px] border-gray-100 transition-all duration-100"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
