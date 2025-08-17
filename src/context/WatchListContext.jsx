import { createContext, useState , useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {

    const [watchlist, setWatchList] = useState([])
    const [genreList, setGenreList] = useState([])
    useEffect(() => {
        let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=a4fa8d21831dea0ce9957e0fb219c176"

        fetch(url)
            .then((response) => response.json())
            .then((data) =>
                setGenreList(data.genres || []))
    }, [])

    const toggleWatchlist = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id);
        if (index === -1) {
            setWatchList([...watchlist, movie])
        }
        else {
            setWatchList([...watchlist.slice(0, index), ...watchlist.slice(index + 1)])
        }
    }

    return (
        <WatchListContext.Provider value={{ watchlist, toggleWatchlist,genreList }} >
            {children}
        </WatchListContext.Provider>
    )

}