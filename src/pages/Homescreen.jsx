import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Row from "../components/Row";
import { fetchNowPlayingMovies, fetchUpcomingMovies, selectNowPlayingMovies, selectUpcomingMovies } from "../features/movie/movieSlice";
import { fetchNetflixOriginals, selectNetflixOriginals } from "../features/tv/tvSlice";
import { platformType } from "../helper/api-requests";

const Homescreen = () => {
    const dispatch = useDispatch();
    const { status, data } = useSelector(selectNetflixOriginals)
    useEffect(() => {
        dispatch(fetchNetflixOriginals())
    }, [])

    return (
        <>
            {status === "loading" ?
                <p>... loading</p>
                : status === "success" ?
                    <Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platformType.tv} />
                    : ""
            }

            <div className="px-5 py-3">
                <Row title="Now Playing Movies" action={fetchNowPlayingMovies} selector={selectNowPlayingMovies} />

                <Row title="Upcoming Movies" action={fetchUpcomingMovies} selector={selectUpcomingMovies} />

                <Row title="Netflix Originals" action={fetchNetflixOriginals} selector={selectNetflixOriginals} />
            </div>
        </>
    )
}

export default Homescreen