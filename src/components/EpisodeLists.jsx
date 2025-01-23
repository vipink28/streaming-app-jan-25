import React from 'react';
import { IMG_URL } from '../helper/api-requests';
import Ratings from './Ratings';

const EpisodeLists = ({ seasonDetails }) => {

    return (
        <div className='py-3'>
            <h2>{seasonDetails.name}</h2>


            <div className='mt-4'>
                {
                    seasonDetails.episodes?.map((episode) => (
                        <div key={episode.id} className='grid grid-cols-5 mb-4'>
                            <div>{episode.air_date}</div>
                            <div><img className='max-w-full' src={IMG_URL + episode.still_path} /></div>
                            <div>{episode.name}</div>
                            <div>{episode.overview}</div>
                            <div> <Ratings voteAverage={episode.vote_average} voteCount={episode.vote_count} />  </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EpisodeLists