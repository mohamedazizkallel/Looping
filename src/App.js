import React, { useState } from 'react'
import Nav from './nav'
import Rout from './rout'
import Footer from './footer'
import Productdetail from './productdetails'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  // add to cart//
  const [cart, setCart] = useState([])
  const [detail, setDetail] = useState([])
  // filter product//
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product
    })
    setProduct(change)
  }
  //product detail
  const [close, setClose] = useState(false)
  const view = (product) => {
    setDetail([{ ...product }])
    setClose(true)
  }
  // add to cart//
  const addToCart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if (exist) {
      alert('This Product is already added to cart')
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }
  }
  console.log(cart)
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
        />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
