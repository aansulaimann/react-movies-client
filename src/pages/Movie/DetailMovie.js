import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import Navbar from "../../component/Navbar/Navbar"

const DetailMovie = () => {

    const [dataMovie, setData] = useState([])
    const [jumlahPesan, setJumlahPesan] = useState(0)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getDataMovieById()
    }, [])

    const getDataMovieById = async () => {
        const response = await fetch(`http://localhost:8080/movies/${id}`)
        const data = await response.json()
        setData(data)
    }

    const addMovieToCart = async (e) => {
        e.preventDefault();

        const dataToCart = { jumlahPesan, dataMovie }

        await fetch('http://localhost:8080/cart', {
            method: "POST",
            body: JSON.stringify(dataToCart),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        navigate('/cart')
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/" className="text-dark text-decoration-none">Home</a></li>
                                <li className="breadcrumb-item"><a href="/movies" className="text-dark text-decoration-none">Movies</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{dataMovie.title}</li>
                            </ol>
                        </nav>
                    </div>

                </div>
                <form onSubmit={addMovieToCart}>
                    <div className="row mt-2">
                        <div className="col-lg-3">
                            <img src={'../../static/images/' + dataMovie.image} alt="" className="img-fluid imgDetail shadow-lg" />
                        </div>
                        <div className="col-lg">
                            <h3>{dataMovie.title}</h3>
                            <h6>{dataMovie.kategori}</h6>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="fw-light">$ {dataMovie.price}</p>
                            <div className="mt-3 col-lg-3">
                                <label className="form-label fw-bold">Jumlah Pesan Tiket</label>
                                <input type="text" name="jumlah_pesan" value={jumlahPesan} onChange={(e) => setJumlahPesan(e.target.value)} className="form-control" />
                            </div>
                            <button className="btn btn-success mt-3">Add Movie to cart</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DetailMovie