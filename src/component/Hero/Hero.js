import HeroImage from "../../assets/images/heroImage.svg"

export const Hero = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-between align-items-center rowHero rounded p-5">
                    <div className="col-lg-6">
                        <img src={HeroImage} alt="hero" className="img-fluid" />
                    </div>
                    <div className="col text-center col-lg-6 text-lg-start text-white">
                        <h4>Movie recommendations that you can watch with the people you love</h4>
                        <p className="fw-light">Movie recommendations that you can watch with the people you love</p>
                        <button className="btn btn-outline-light">Get Ticket Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}