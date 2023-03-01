import BestMovies from "../../component/BestMovies/BestMovies"
import Footer from "../../component/Footer/Footer"
import { Hero } from "../../component/Hero/Hero"
import Slider from "../../component/Hero/Slider"
import Navbar from "../../component/Navbar/Navbar"
import Products from "../../component/Products/Products"

const Movies = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Products />
            <br />
            <Hero />
            <br />
            <BestMovies />
            <Footer />
        </div>
    )
}

export default Movies