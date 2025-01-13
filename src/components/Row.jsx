// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import Card from './Card';

const Row = ({ title, selector, action }) => {
    const dispatch = useDispatch();
    const { status, data } = useSelector(selector);
    useEffect(() => {
        dispatch(action());
    }, [])



    return (
        <div>
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