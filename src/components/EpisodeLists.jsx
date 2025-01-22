import React from 'react'

const EpisodeLists = (seasonDetails) => {
    return (
        <div className='py-3'>
            <h2>{seasonDetails.name}</h2>

            <div className='mt-4'>
                {
                    seasonDetails.episodes?.map((episode) => (
                        <div className='grid grid-cols-5'>
                            <div>{episode.name}</div>
                            <div></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EpisodeLists