import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="bg-slate-950 fixed top-0 w-full z-50 bg-opacity-40 hover:bg-opacity-100">
            <div className="max-w-7xl px-4 mx-auto flex items-center">
                <div className="text-white font-bold text-2xl py-2">Streaming App</div>
                <div className="ms-5 flex gap-3 text-blue-50">
                    <Link to="/">Home</Link>
                    <Link to="/browse/tv">Tv Shows</Link>
                    <Link to="/browse/movie">Movies</Link>
                    <Link to="/browsebygenre/movie/28">Browse By Genre</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar