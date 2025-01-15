import { useEffect, useState } from "react";

const VideoPlayer = ({ videosList }) => {
    const [trailer, setTrailer] = useState(null);
    const getTrailer = () => {
        const trailerObj = videosList.find((trailer) => (
            trailer.type === "Trailer"
        ))
        setTrailer(trailerObj);
    }

    useEffect(() => {
        if (videosList.length > 0) {
            getTrailer();
        }
    }, [videosList])

    return (
        <div class="mb-3">
            <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${trailer?.key}?mute=1&autoplay=1&rel=0`} title={trailer?.name} allowFullScreen></iframe>
        </div>
    )
}

export default VideoPlayer