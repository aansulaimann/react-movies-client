import { useEffect, useState } from "react"
import Footer from "../../component/Footer/Footer"
import Navbar from "../../component/Navbar/Navbar"

const Cart = () => {
    const [dataCart, setDataCart] = useState([])

    useEffect(() => {
        getDataCart()
    }, [])

    const getDataCart = async () => {
        const response = await fetch('http://localhost:8080/cart')
        const data = await response.json()
        setDataCart(data)
    }

    const totalHarga = (data) => {
        let total = 0
        data.map((item) => {
            total += item.dataMovie.price * item.jumlahPesan
        })

        return total
    }

    const deleteItem = async (id) => {
        await fetch(`http://localhost:8080/cart/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        getDataCart()
    }


    return (
        <div>
            <Navbar />
            <div className="container mb-5">
                <h2>Your Cart 🤟</h2>
                <hr />
                {
                    dataCart.map((cart, index) => (
                        <div className="row mt-3" key={index}>
                            <div className="col-lg-2">
                                <img src={'../../static/images/' + cart.dataMovie.image} alt="" className="img-fluid" />
                            </div>
                            <div className="col-lg">
                                <h3>{cart.dataMovie.title}</h3>
                                <h5>{cart.dataMovie.kategori}</h5>
                                <p>$ {cart.dataMovie.price}</p>
                                <p className="fw-light">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="fw-bold">Jumlah Pesan Tiket : {cart.jumlahPesan}</p>
                                <button onClick={() => deleteItem(cart.id)} className="btn border shadow-sm">🗑️</button>
                            </div>
                        </div>
                    ))
                }


                {/* <hr /> */}
                <div className="row align-items-center mt-5">
                    <div className="col-lg-4">
                        <p>Total harga pesanan <span className="text-success fw-bold">$ {totalHarga(dataCart)}</span></p>
                        <button className="btn btn-outline-success">checkout</button>
                    </div>
                    <div className="col-lg">
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart