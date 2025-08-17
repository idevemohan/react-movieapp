import React, { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WatchListContext } from "../context/WatchListContext";
import Watchlist from "../pages/Watchlist";

const MovieCard = ({ movie }) => {
    const {toggleWatchlist} = useContext(WatchListContext)

    const inWatchList = Watchlist.some( m => m.id == movie.id)

    return (
        <div className="bg-gray-400 p-4 relative rounded-lg text-white">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}
             className='w-full  h-80 object-contain rounded-sm' />
            <h3 className='text-lg font-bold mt-4'>{movie.title} </h3>
            <p className='text-sm text-gray-400'>{movie.release_date} </p>
            <button className="absolute top-2 right-2 text-red-500"
            onClick={() => toggleWatchlist(movie)}>
                {inWatchList ? <FaHeart /> : < FaRegHeart />}
            </button>
        </div>
    )
}

export default MovieCard