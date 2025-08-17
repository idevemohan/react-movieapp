import React from "react";

const GenreFilter = ({genreList,setSelectedGenre}) => {
    return (
        <select className=" p-2 border border-gray-400"
        onChange={ (e) => setSelectedGenre(e.target.value)} >
            <option value="">All Genres</option>
            {genreList.map((genre) =>{
                return (
                    <option key={genre} value={genre.id}>
                        {genre.name}
                    </option>
                )
            })}
        </select>
    )
}

export default GenreFilter