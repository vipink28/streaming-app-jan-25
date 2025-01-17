/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHeaderDetails, selectHeaderDetails } from "../features/common/commonSlice";
import { truncateText } from "../helper";
import { IMG_URL } from "../helper/api-requests";
import GenreLinks from "./GenreLinks";
import Ratings from "./Ratings";
import VideoPlayer from "./VideoPlayer";

const Header = ({ video, platform }) => {
    const dispatch = useDispatch();
    const { status, data } = useSelector(selectHeaderDetails);
    const [isVideoPlayer, setIsVideoPlayer] = useState(false);
    useEffect(() => {
        if (video) {
            dispatch(fetchHeaderDetails({ platform: platform, id: video.id }))
        }
    }, [video])

    const handleVideoPlayer = () => {
        setIsVideoPlayer(true);
    }

    return (
        status === "success" ?
            <div className="h-screen w-full relative">
                {isVideoPlayer ?
                    <div>
                        <button>x</button>
                        <VideoPlayer videosList={data.videos.results} />
                    </div>
                    :
                    <>
                        <img className="w-full h-full object-cover object-center inline-block" src={IMG_URL + data.backdrop_path} alt="" />
                        <div className="absolute top-1/2 max-w-2xl -translate-y-1/2 left-24 z-20 text-white">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{data.name || data.original_name || data.title || data.original_title}</h1>
                            <h3 className="text-orange-500 mb-3 text-4xl italic">{data.tagline}</h3>
                            <p className="text-xl mb-5">{truncateText(data.overview, 180)}</p>
                            <Ratings voteAverage={data.vote_average} voteCount={data.vote_count} />
                            <GenreLinks genres={data.genres} />
                            <div className="mt-4 flex gap-3 items-center">
                                <button onClick={handleVideoPlayer} className="bg-red-600 text-white rounded-md min-w-40 p-3 font-bold text-xl">Play</button>
                                <Link to={`/details/${platform}/${data.id}`} className="bg-orange-600 text-white rounded-md min-w-40 p-3 text-center font-bold text-xl">More Info</Link>
                            </div>
                        </div>
                        <div className="h-full w-full max-w-4xl absolute left-0 top-0 z-10 bg-gradient-to-r from-slate-950 to-transparent opacity-80"></div>
                    </>
                }
            </div>
            : "...loading"
    )
}

export default Header;