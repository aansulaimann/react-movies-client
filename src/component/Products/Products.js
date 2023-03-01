import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Products = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getDataMovies()
    }, [])

    const getDataMovies = async () => {
        const response = await fetch('http://localhost:8080/movies')
        const data = await response.json()
        setMovies(data)
    }

    return (
        <div className="container mt-5">
            <h3>Our Movies for you</h3>
            <div className="row">
                {
                    movies.map((movie, index) => (
                        <div className="col-lg-4 mt-4" key={index}>
                            <Link to={'/movie/' + movie.id} className="text-decoration-none text-dark">
                                <div className="card">
                                    <img src={'../static/images/' + movie.image} className="card-img-top cardImgBest shadow" alt={movie.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="row text-center">
                <div className="col mt-5">
                    <button className="shadow-lg btn btn-outline-dark">Load More</button>
                </div>
            </div>
        </div >
    )
}

export default Products