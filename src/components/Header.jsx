/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeaderDetails, selectHeaderDetails } from "../features/common/commonSlice";
import { IMG_URL } from "../helper/api-requests";

const Header = ({ video, platform }) => {
    const dispatch = useDispatch();
    const { status, data } = useSelector(selectHeaderDetails);
    useEffect(() => {
        if (video) {
            dispatch(fetchHeaderDetails({ platform: platform, id: video.id }))
        }
    }, [video])

    return (
        status === "success" ?
            <div className="h-screen w-full relative">
                <img className="w-full h-full object-cover object-center inline-block" src={IMG_URL + data.backdrop_path} alt="" />

                <div className="absolute top-1/2 -translate-y-1/2 left-48">
                    <h1 className="text-4xl font-bold">{data.name || data.original_name || data.title || data.original_title}</h1>
                    <h3>{data.tagline}</h3>
                    <p className="text-xl">{data.overview}</p>
                </div>
            </div>
            : "...loading"
    )
}

export default Header;