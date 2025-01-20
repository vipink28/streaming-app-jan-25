// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import apiRequests from '../helper/api-requests';
import axios from '../helper/axios';
import Card from './Card';

const Row = ({ title, selector, action, platform, genre }) => {
    const dispatch = useDispatch();
    const { status, data } = useSelector(genre ? (state) => state.movie.upcomingMovies : selector);
    const [videosByGenre, setVideosByGenre] = useState(null);
    useEffect(() => {
        if (!genre) {
            dispatch(action());
        }
    }, [genre])

    const fetchVideoByGenre = async (platform, genreid) => {
        try {
            const response = await axios.get(apiRequests.getByGenres(platform, genreid));
            setVideosByGenre(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (genre) {
            fetchVideoByGenre(platform, genre.id)
        }
    }, [genre]);


    return (
        <div>
            {
                genre ?
                    <>
                        <h2 className='text-2xl font-bold mb-3'>{title}</h2>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={5}
                        >
                            {
                                videosByGenre?.results.map((video) => (
                                    <SwiperSlide key={video.id}>
                                        <Card video={video} platform={platform} />
                                    </SwiperSlide>
                                ))

                            }

                        </Swiper>
                    </>
                    :
                    <>
                        {
                            status === "loading" ?
                                <div>...loading</div> :
                                status === "success" ?
                                    <>
                                        <h2 className='text-2xl font-bold mb-3'>{title}</h2>
                                        <Swiper
                                            spaceBetween={20}
                                            slidesPerView={5}
                                        >
                                            {
                                                data.results.map((video) => (
                                                    <SwiperSlide key={video.id}>
                                                        <Card video={video} platform={platform} />
                                                    </SwiperSlide>
                                                ))

                                            }

                                        </Swiper>
                                    </>
                                    : ""
                        }
                    </>
            }
        </div>
    )
}

export default Row