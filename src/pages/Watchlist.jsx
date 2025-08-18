import React, { useContext, useState } from "react";
import GenreFilter from "../components/GenreFilter";
import { WatchListContext } from "../context/WatchListContext";
import MovieCard from "../components/MovieCard";


const Watchlist = () => {
    const {watchlist,genreList} = useContext(WatchListContext)

    const [search,setSearch] = useState("")
    const [selectedGenre,setSelectedGenre] = useState("")

    const filteredMovies = watchlist.filter((movie) => 
    movie.title.toLowerCase().includes(search.toLowerCase())
).filter((movie) => {
    return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))
})

    return (
        <div>
            <input type="text" placeholder="Search Movies...."
                className="p-2 border border-gray-700 rounded-xl w-3/4 md:w-1/2
             bg-opacity-60 fixed top-20 left-1/2 transform -translate-x-1/2 z-10" 
             onChange={(e) => setSearch(e.target.value)}/>

            <div className="mt-36 flex justify-center">
                <GenreFilter genreList={genreList}
                    setSelectedGenre= {setSelectedGenre} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24'>
                {filteredMovies.map((movie) => {
                  return <MovieCard key={movie.id} movie={movie} />
                })}
            </div>
        </div>
    )
}

export default Watchlist