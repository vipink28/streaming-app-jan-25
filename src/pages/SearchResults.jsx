import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { selectSearchQuery } from '../features/common/commonSlice';
import apiRequests from '../helper/api-requests';
import axios from '../helper/axios';

const SearchResults = () => {
    const query = useSelector(selectSearchQuery);
    const [videosBySearch, setVideosBySearch] = useState();
    const fetchSearchResults = async (query) => {
        const response = await axios.get(apiRequests.getByQuery("movie", query));
        setVideosBySearch(response.data);
    }
    useEffect(() => {
        fetchSearchResults(query);
    }, [query])

    return (
        <div className='mt-12 py-6'>
            <h2>Search Results for: {query}</h2>
            <div className='grid gap-4 grid-cols-5'>
                {
                    videosBySearch ?
                        videosBySearch.results.map((video) => (
                            <div key={video.id}>
                                <Card video={video} platform="movie" />
                            </div>
                        )) : ""
                }
            </div>
        </div>
    )
}

export default SearchResults