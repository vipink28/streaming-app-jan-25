/* eslint-disable react/prop-types */
import { IMG_URL } from "../helper/api-requests"

const Header = ({ video }) => {
    return (
        <div className="h-screen w-full relative">
            <img className="max-w-full inline-block" src={IMG_URL + video.backdrop_path} alt="" />
        </div>
    )
}

export default Header