import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRightCircle } from 'react-icons/bs'
import { BsTruck } from 'react-icons/bs'
import { BiSolidBadgeDollar } from 'react-icons/bi'
import { RiWaterPercentFill } from 'react-icons/ri'
import { BiHeadphone } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai'
import Homeproduct from './homeproduct'
import './home.css'

const Home = ({ detail, view, close, setClose, addToCart }) => {
  return (
    <>
      {close ? (
        <div className='product_detail'>
          <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'>
              <AiOutlineClose />
            </button>
            {detail.map((curElm) => {
              return (
                <div className='productbox'>
                  <div className='img_box'>
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className='detail'>
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>A Book Everyone Will Love</p>
                    <h3>{curElm.Price}</h3>
                    <button>Add to Cart</button>
                  </div>
                </div>
              )
            })}
            <div className='productbox'></div>
          </div>
        </div>
      ) : null}
      <div className='top_banner'>
        <div className='container'>
          <div className='detail'>
            <h2>The Best Note Book Collection 2023</h2>
            <Link to='/product' className='link'>
              Shop Now <BsArrowRightCircle />
            </Link>
          </div>
          <div className='img_box'>
            <img src='./img/got.jpg' alt='sliderimg'></img>
          </div>
        </div>
      </div>
      <div className='product_type'>
        <div className='container'>
          <div className='box'>
            <div className='img_box'>
              <img src='./img/htip.jpg' alt='htip'></img>
            </div>
            <div className='detail'>
              <p>23 products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src='./img/Mobile Phone.png' alt='mobile'></img>
            </div>
            <div className='detail'>
              <p>58 products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src='./img/smart watch.png' alt='watch'></img>
            </div>
            <div className='detail'>
              <p>14 products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src='./img/tgwdt.jpg' alt='tgwdt'></img>
            </div>
            <div className='detail'>
              <p>22 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className='about'>
        <div className='container'>
          <div className='box'>
            <div className='icon'>
              <BsTruck />
            </div>
            <div className='detail'>
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <BiSolidBadgeDollar />
            </div>
            <div className='detail'>
              <h3>Return and Refund</h3>
              <p>Money back guaranteed </p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <RiWaterPercentFill />
            </div>
            <div className='detail'>
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <BiHeadphone />
            </div>
            <div className='detail'>
              <h3>Customer Support</h3>
              <p>When need be Ask a professional</p>
            </div>
          </div>
        </div>
      </div>
      <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
          {Homeproduct.map((curElm) => {
            return (
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                    <li onClick={() => addToCart(curElm)}>
                      <AiOutlineShoppingCart />
                    </li>
                    <li onClick={() => view(curElm)}>
                      <BsEye />
                    </li>
                    <li>
                      <AiOutlineHeart />
                    </li>
                  </div>
                </div>
                <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.Price}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='banner'>
        <div className='container'>
          <div className='detail'>
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 inchs that's a lot of inches</h3>
            <p>$6969</p>
            <Link to='/product' className='link'>
              Shop Now <BsArrowRightCircle />
            </Link>
          </div>
          <div className='img_box'>
            <img src='./img/slider-img.png' alt='sliderimg'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
