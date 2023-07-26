import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react'
import {BsHouseAddFill} from 'react-icons/bs'
import {BsCartDashFill} from 'react-icons/bs'
import {FaCarSide} from 'react-icons/fa'
import {BiLeftArrowAlt} from 'react-icons/bi'
import {BiRightArrowAlt} from 'react-icons/bi'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

function Home({nameprops}) {

  return (
    <div>
    <header>
     <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <div className="container">
          <a className="navbar-brand text-white" href="#">BOOKING</a>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/home" aria-current="page">Home<span className="visually-hidden">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login" aria-current="page">Login<span className="visually-hidden">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input className="form-control me-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-white my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

     <div className="banner">
        <Slider
         autoplay={true}
         autoplaySpeed={2000}
         dots={true}
         prevArrow={<BiLeftArrowAlt size={52} fontSize={60} color='red'/>}
         nextArrow={<BiRightArrowAlt fontSize={60} color='red'/>}
        >
          <img src="./../../1.jpg" alt="" />
          <img src="./../../download.jpg" alt="" />
          <img src="./../../download-3.jpg" alt="" />
        </Slider>
      </div>
    </header>

    <main className='p-5'></main>

    </div>
  
  )
}

export default Home