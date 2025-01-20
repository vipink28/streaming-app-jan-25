import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import apiRequests from '../helper/api-requests';
import axios from '../helper/axios';

const BrowseByGenre = () => {
    const { platform, genreid } = useParams();
    const [videosByGenre, setVideosByGenre] = useState();
    const fetchVideoByGenre = async (platform, genreid) => {
        try {
            const response = await axios.get(apiRequests.getByGenres(platform, genreid));
            setVideosByGenre(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (platform && genreid) {
            fetchVideoByGenre(platform, genreid);
        }
    }, [platform, genreid])

    return (
        <div className='mt-12 py-6'>
            <div className='mb-4'>
                Filters
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