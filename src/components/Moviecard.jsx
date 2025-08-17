import React from "react";
import {FaHeart,FaRegHeart} from "react-icons/fa";




const Moviecard = ({movie}) => {
    return(
        <div className="bg-gray-400 p-4 relative rounded-lg text-white">
            <img className="relative rounded-sm object-fit" 
            src={movie.poster} alt={movie.title} />
            <h3 className="text-lg font-bold mt-4">{movie.title}</h3>
            <button className="absolute top-2 right-2 text-red-500">
                { 1 ==1 ? <FaHeart />: < FaRegHeart/>}
            </button>
        </div>
    )
}

export default Moviecard