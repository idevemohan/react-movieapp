import React from "react";
import GenreFilter from "../components/Genrefilter";


const Watchlist = () => {
    return(
        <div>
                <input type="text" placeholder="Search Movies...."
                    className="p-2 border border-gray-700 rounded-xl w-3/4 md:w-1/2
             bg-opacity-60 fixed top-20 left-1/2 transform -translate-x-1/2 z-10" />

             <div className="mt-36 flex justify-center">
                <GenreFilter />
             </div>
            </div>
    )
}

export default Watchlist