import RomanceImage from "../../assets/images/bg/romance.jpg"
import CarImage from "../../assets/images/bg/car.jpg"
import ScifiImage from "../../assets/images/bg/scifi.jpg"


const Slider = () => {
    return (
        <div className="container shadow-lg p-0">
            <div className="row">
                <div className="col">
                    <div id="carouselExample" className="carousel slide carouselImage">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={RomanceImage} className="d-block w-100 rounded shadow" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={CarImage} className="d-block w-100 rounded shadow" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={ScifiImage} className="d-block w-100 rounded shadow" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slider