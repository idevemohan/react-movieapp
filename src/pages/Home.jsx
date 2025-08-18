import React, { useEffect, useState } from "react";
import Moviecard from "../components/Moviecard";


const Home = () => {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")


    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=a4fa8d21831dea0ce9957e0fb219c176`

        if (search) {
            url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=a4fa8d21831dea0ce9957e0fb219c176`

        }

        fetch(url)
            .then((response) => response.json())
            .then((data) =>
                setMovies(data.results))
    }, [page, search])

    return (
        <div className="p-4 pt-20">
            <input type="text" placeholder='Search movies...'
                className='border p-2 w-3/4 md:w-1/2 rounded-xl border-gray-700 backdrop-blur-md text-white fixed top-17 left-1/2 transform -translate-x-1/2 z-20'
                onChange={(e) => setSearch(e.target.value)} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24'>
                {movies.map((movie, index) => (
                    <Moviecard key={index} movie={movie} />
                ))}
            </div>
            <div className="pagination-container flex justify-between mt-5 font-semibold">
                <button disabled={page==1} className="bg-gray-300 px-4 py-2 rounded"
                onClick={() =>{
                     setPage ((prev) => prev-1)
                }}>
                    Prev
                </button>
                <button className="bg-gray-300 px-4 py-2 rounded"
                onClick={() =>{
                     setPage ((prev) => prev+1)
                }}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Home