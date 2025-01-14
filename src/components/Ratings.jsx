import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ratings = ({ voteAverage, voteCount }) => {
    let voteAvg = Math.floor(voteAverage / 2);
    const stars = [...Array(5)];

    return (
        <div className="py-3 flex items-center gap-3">
            <div className="flex items-center">
                {
                    stars.map((item, index) => (
                        index < voteAvg ?
                            <FontAwesomeIcon key={index} icon={solidStar} />
                            :
                            <FontAwesomeIcon key={index} icon={faStar} />
                    ))
                }
            </div>
            <p>{voteCount}</p>
        </div>
    )
}

export default Ratings