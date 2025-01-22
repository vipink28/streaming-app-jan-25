import React, { useEffect, useState } from 'react';
import apiRequests from '../helper/api-requests';
import axios from '../helper/axios';
import EpisodeLists from './EpisodeLists';

const Seasons = ({ seasonsList, seriesId, numberOfSeasons }) => {
    const [seasonDetails, setSeasonDetails] = useState();

    const fetchSeasonDetails = async (seriesId, seasonNumber) => {
        const response = await axios.get(apiRequests.getSeasonsDetails(seriesId, seasonNumber));
        setSeasonDetails(response.data);
    }

    useEffect(() => {
        if (seasonsList && seriesId) {
            fetchSeasonDetails(seriesId, seasonsList[0].season_number);
        }
    }, [seasonsList, seriesId]);

    const handleSeason = (e) => {
        let { value } = e.target;
        fetchSeasonDetails(seriesId, value);
    }


    return (
        <div className='py-3'>
            <div className='flex justify-between'>
                <h3>Seasons</h3>
                <select onChange={handleSeason} className='px-2 py-1 text-black'>
                    {
                        seasonsList?.map((season) => (
                            <option value={season.season_number}>{season.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className='mt-4'>
                <EpisodeLists seasonDetails={seasonDetails} />
            </div>
        </div>
    )
}

export default Seasons