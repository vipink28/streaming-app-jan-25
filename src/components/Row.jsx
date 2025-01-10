// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import { fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import Card from './Card';

const Row = () => {
    const dispatch = useDispatch();
    const { status, data } = useSelector(selectUpcomingMovies);
    useEffect(() => {
        dispatch(fetchUpcomingMovies());
    }, [])



    return (
        <div>
            {
                status === "loading" ?
                    <div>...loading</div> :
                    status === "success" ?
                        <>
                            <h2>Row Title</h2>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={5}
                            >
                                {
                                    data.results.map((video) => (
                                        <SwiperSlide key={video.id}>
                                            <Card video={video} />
                                        </SwiperSlide>
                                    ))

                                }

                            </Swiper>
                        </>
                        : ""
            }
        </div>
    )
}

export default Row