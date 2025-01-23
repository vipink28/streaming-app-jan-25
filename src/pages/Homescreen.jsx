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


    const handleNext = () => {
        dispatch(fetchUpcomingMovies(2))
    }
    return (
        <>
            {status === "loading" ?
                <p>... loading</p>
                : status === "success" ?
                    <Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platformType.tv} />
                    : ""
            }

            <button onClick={handleNext}>Next</button>

            <div className="px-5 py-3">
                <Row title="Now Playing Movies" action={fetchNowPlayingMovies} selector={selectNowPlayingMovies} platform={platformType.movie} />

                <Row title="Upcoming Movies" action={fetchUpcomingMovies} selector={selectUpcomingMovies} platform={platformType.movie} />

                <Row title="Netflix Originals" action={fetchNetflixOriginals} selector={selectNetflixOriginals} platform={platformType.tv} />
            </div>
        </>
    )
}

export default Homescreen