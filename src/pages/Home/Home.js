import BestMovies from "../../component/BestMovies/BestMovies"
import { Hero } from "../../component/Hero/Hero"
import Navbar from "../../component/Navbar/Navbar"
import Products from "../../component/Products/Products"
import Footer from "../../component/Footer/Footer"


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <BestMovies />
            <Products />
            <Footer />
        </div>
    )
}

export default Home