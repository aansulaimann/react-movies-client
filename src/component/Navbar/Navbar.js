import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mt-3">
                <div className="container">
                    <Link className="navbar-brand" to="/"><strong className="text-dark">Movies</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/movies" className="nav-link">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/fav" className="nav-link ml-5">❤️</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link ml-5">🛒</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar