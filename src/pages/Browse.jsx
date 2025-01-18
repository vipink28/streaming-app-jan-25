import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import apiRequests from '../helper/api-requests';
import axios from "../helper/axios";

const Browse = () => {
    const { platform } = useParams();
    const { data, status } = useSelector(platform === "tv" ? selectNetflixOriginals : selectUpcomingMovies);

    const [genresList, setGenresList] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        if (platform === "tv") {
            dispatch(fetchNetflixOriginals())
        } else {
            dispatch(fetchUpcomingMovies())
        }
    }, [platform])

    const fetchGenresList = async (platform) => {
        try {
            const response = await axios.get(apiRequests.getGenres(platform));
            setGenresList(response.data.genres);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (platform) {
            fetchGenresList(platform);
        }
    }, [platform])








    return (
        <>
            {status === "loading" ?
                <p>... loading</p>
                : status === "success" ?
                    <Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platform} />
                    : ""
            }
        </>
    )
}

export default Browse