/* eslint-disable react/prop-types */
import { IMG_URL } from "../helper/api-requests";

const Header = ({ video }) => {
    return (
        <div className="h-screen w-full relative">
            <img className="w-full h-full object-cover object-center inline-block" src={IMG_URL + video.backdrop_path} alt="" />

            <div className="absolute top-1/2 -translate-y-1/2 left-48">
                <h1 className="text-4xl font-bold">{video.name || video.original_name || video.title || video.original_title}</h1>
                <p className="text-xl">{video.overview}</p>
            </div>
        </div>
    )
}

export default Header;