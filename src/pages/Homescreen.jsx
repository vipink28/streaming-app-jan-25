import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { fetchNetflixOriginals, selectNetflixOriginals } from "../features/tv/tvSlice";

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
                    <Header video={data.results[Math.floor(Math.random() * data.results.length)]} />
                    : ""
            }
        </>
    )
}

export default Homescreen