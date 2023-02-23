import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import pic1 from './pics/pic1.webp'
import EnquireNowdialog from './EnquireNowdialog'
const Banner = () => {
  return (
    <div className='banner' id='banner' >
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/JO2itsT.jpg"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <div style={{ background: 'rgba(0, 0, 0, 0.4)',height:"100%",width:"100%",position:"relative"}}>
          <h6 style={{color:"white",fontWeight:"600",fontFamily:"poppins"}} className='bannerfontup'>One Time investment; Long term Profits</h6>
          <p  className='bannerfontdown'>Premium office Spaces | Luxury Retail Spaces
</p>
          

          </div>
          <button className='bannerbutton' ><EnquireNowdialog/></button>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/j5v6EI5.jpg"
          alt="Second slide"
          style={{height:"100%"}}
        />

        <Carousel.Caption>
        <div style={{ background: 'rgba(0, 0, 0, 0.4)',height:"100%",width:"100%",position:"relative"}}>
          <h6 style={{color:"white",fontSize:"0.6 rem",fontWeight:"600",fontFamily:"poppins"}} className='bannerfontup'>Step Towards a Futuristic Growth & a Profitable Investment</h6>
          <p  className='bannerfontdown'>Premium office Spaces | Luxury Retail Spaces</p>
          

          </div>
          <button className='bannerbutton' ><EnquireNowdialog/></button>
          
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    </div>
  )
}

export default Banner