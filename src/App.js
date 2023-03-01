import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import FavouriteMovies from "./pages/FavouriteMovie/FavouriteMovie";
import Cart from "./pages/Cart/Cart";
import DetailMovie from "./pages/Movie/DetailMovie";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movie />}></Route>
          <Route path="/fav" element={<FavouriteMovies />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/movie/:id" element={<DetailMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
