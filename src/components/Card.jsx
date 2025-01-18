import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../helper/api-requests";
import Ratings from "./Ratings";

const Card = ({ video, platform }) => {
    const navigate = useNavigate();
    const showDetails = () => {
        navigate(`/details/${platform}/${video.id}`)
    }
    return (
        <div className="relative group overflow-hidden" onClick={showDetails}>
            <img className="w-full h-full object-cover object-center inline-block" src={IMG_URL + video.backdrop_path} alt="" />
            <div className="absolute w-full h-full top-0 -translate-x-full bg-gradient-to-r from-slate-900 to-transparent group-hover:translate-x-0 transition-transform duration-300"></div>

            <div className="absolute p-3 flex flex-col justify-end h-full w-full z-20 text-white -bottom-11 group-hover:bottom-0 left-0 transition-all duration-300">
                <h3 className="font-bold whitespace-nowrap text-xl overflow-hidden text-ellipsis w-11/12">{video.name || video.title || video.original_name || video.original_title}</h3>
                <Ratings voteAverage={video.vote_average} voteCount={video.vote_count} />
            </div>
        </div>
    )
}

export default Card