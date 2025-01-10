import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Row from "../components/Row";
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

            <div className="px-5 py-3">
                <Row />
            </div>
        </>
    )
}

export default Homescreen