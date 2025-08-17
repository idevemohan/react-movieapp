import React, { useEffect, useState } from "react";
import Moviecard from "../components/MovieCard";


// const movies = [
//     {
//         poster: movie1,
//         title: "The Gorge"
//     },
//     {
//         poster: movie1,
//         title: "The Gorge"
//     },
//     {
//         poster: movie1,
//         title: "The Gorge"
//     },
//     {
//         poster: movie1,
//         title: "The Gorge"
//     },
//     {
//         poster: movie1,
//         title: "The Gorge"
//     },
//     {
//         poster: movie1,
//         title: "The Gorge"
//     }
// ]

const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/movie?page=${page}&api_key=a4fa8d21831dea0ce9957e0fb219c176")
            .then((response) => response.json())
            .then((data) => 
                setMovies(data.results))
    }, [])

    return (
        <div className="p-4 pt-20">
            <div>
                <input type="text" placeholder="Search Movies...."
                    className="p-2 border border-gray-700 rounded-xl w-3/4 md:w-1/2
             bg-opacity-60 fixed top-20 left-1/2 transform -translate-x-1/2 z-10" />
            </div>
            <div className="movies-container mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
                {movies.map((movie,index) => {
                    return <Moviecard key={index}
                        movie={movie} />
                })}

            </div>
            <div className="pagination-container flex justify-between mt-5 font-semibold">
                <button className="bg-gray-300 px-4 py-2 rounded">Prev</button>
                <button className="bg-gray-300 px-4 py-2 rounded">Next</button>
            </div>
        </div>
    )
}

export default Home