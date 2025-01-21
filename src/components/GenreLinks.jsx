import { Link } from "react-router-dom"

const GenreLinks = ({ genres, platform }) => {
    return (
        <div className="py-3 flex gap-2 items-center">
            {
                genres.map((genre) => (
                    <Link to={`/browsebygenre/${platform}/${genre.id}`} key={genre.id} className="px-4 py-1 bg-yellow-400 rounded-full font-semibold text-slate-950">{genre.name}</Link>
                ))
            }
        </div>
    )
}

export default GenreLinks