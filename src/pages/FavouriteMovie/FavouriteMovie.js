import { useEffect, useState } from "react"
import Footer from "../../component/Footer/Footer"
import Navbar from "../../component/Navbar/Navbar"

const FavouriteMovie = () => {

    const [favMovie, setFavMovie] = useState([])

    useEffect(() => {
        getFavMovie()
    }, [])

    const getFavMovie = async () => {
        const response = await fetch('http://localhost:8080/favourite')
        const data = await response.json()
        setFavMovie(data)
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                {/* <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/" className="text-dark text-decoration-none">Home</a></li>
                                <li className="breadcrumb-item"><a href="/" className="text-dark text-decoration-none">Movies</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                    </div>

                </div> */}

                {/* <div className="row mt-4"> */}
                <h4>Your Favourite Movies 🤩🥳</h4>
                {/* <div className="col"> */}

                {
                    favMovie.map((fav, index) => (
                        <div className="row mb-5" key={index}>
                            <div className="col-lg-6 bg-light" width="200">
                                image
                            </div>
                            <div className="col-lg-6">
                                <h4>title ✨</h4>
                                <h6>Penjelasan</h6>
                                <p>durasi</p>
                                <p>rate</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            {/* </div>
            </div> */}
            <Footer />
        </div>
    )
}

export default FavouriteMovie