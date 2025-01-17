import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { fetchVideoDetails, selectVideoDetails } from "../features/common/commonSlice";
import { IMG_URL } from "../helper/api-requests";

const Details = () => {
    const { platform, id } = useParams();
    const dispatch = useDispatch();
    const { status, data } = useSelector(selectVideoDetails);

    useEffect(() => {
        if (platform && id) {
            dispatch(fetchVideoDetails({ platform, id }));
        }
    }, [platform, id]);

    return (
        <div className="max-w-screen-2xl mx-auto px-4">
            {
                status === "success" ?
                    <div className="flex flex-col mt-12">
                        <div className="mb-3">
                            <VideoPlayer videosList={data.videos.results} />
                            {/* <img className="w-full h-full object-cover object-center inline-block" src={IMG_URL + data.backdrop_path} alt="" /> */}
                        </div>

                        <div className="flex gap-3">
                            <div className="w-2/6">
                                <img className="max-w-full inline-block" src={IMG_URL + data.poster_path} alt="" />
                            </div>
                            <div className="w-2/3">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{data.name || data.original_name || data.title || data.original_title}</h1>
                            </div>
                        </div>

                    </div>

                    : "...loading"
            }
        </div>
    )
}

export default Details