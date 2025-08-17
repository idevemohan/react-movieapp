import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WatchListContext } from "../context/WatchListContext";

const Navbar = () => {
    const {watchlist} = useContext(WatchListContext)
    return (
        <nav className="bg-gray-800 text-white font-semibold flex justify-between items-center p-4 top-0 fixed w-full z-10">
            <div className="flex gap-10">
                <p>CineVerse</p>
                <Link to="/">Home</Link>
                <Link to="/" >Movies</Link>
            </div>
            <div className="flex justify-between items-center gap-8">
                <Link to="/watchlist">Watchlist({watchlist.length})</Link>
                <button className="bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-400">Subscribe</button>
            </div>
        </nav>
    )
}

export default Navbar