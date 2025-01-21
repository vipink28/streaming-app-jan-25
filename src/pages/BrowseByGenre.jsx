import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import apiRequests from '../helper/api-requests';
import axios from '../helper/axios';

const BrowseByGenre = () => {
    const { platform, genreid } = useParams();
    const [videosByGenre, setVideosByGenre] = useState();
    const [currentPlatform, setCurrentPlatform] = useState();
    const [genresList, setGenresList] = useState(null);
    const fetchVideoByGenre = async (platform, genreid) => {
        try {
            const response = await axios.get(apiRequests.getByGenres(platform, genreid));
            setVideosByGenre(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchGenresList = async (platform) => {
        try {
            const response = await axios.get(apiRequests.getGenres(platform));
            setGenresList(response.data.genres);
        } catch (error) {
            console.log(error);
        }
    }

    const handlePlatform = (e) => {
        let { value } = e.target;
        fetchGenresList(value);
        setCurrentPlatform(value);
    }

    const handleGenres = (e) => {
        let { value } = e.target;
        //navigate("/browsebygenre/currentPlatform/value");
        fetchVideoByGenre(currentPlatform, value);
    }

    useEffect(() => {
        if (platform && genreid) {
            fetchVideoByGenre(platform, genreid);
            setCurrentPlatform(platform);
            fetchGenresList(platform);
        }
    }, [platform, genreid])

    return (
        <div className='mt-12 py-6 px-4'>
            <div className='mb-6 flex gap-3 justify-end text-slate-950'>
                <p className='text-white'>Filter By:</p>
                <select className='py-1 px-2' onChange={handlePlatform}>
                    <option selected={platform === "tv" ? true : false} value="tv">Tv</option>
                    <option selected={platform === "movie" ? true : false} value="movie">Movie</option>
                </select>
                <select className='py-1 px-2' onChange={handleGenres}>
                    {
                        genresList?.map((genre) => (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className='grid gap-4 grid-cols-5'>
                {
                    videosByGenre ?
                        videosByGenre.results.map((video) => (
                            <div key={video.id}>
                                <Card video={video} platform={platform} />
                            </div>
                        )) : ""
                }
            </div>
        </div>
    )
}

export default BrowseByGenre