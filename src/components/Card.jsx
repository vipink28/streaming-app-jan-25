import { IMG_URL } from "../helper/api-requests"

const Card = ({ video }) => {
    return (
        <div>
            <img className="w-full h-full object-cover object-center inline-block" src={IMG_URL + video.backdrop_path} alt="" />
        </div>
    )
}

export default Card