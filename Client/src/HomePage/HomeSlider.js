import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const HomeSlider = () => {
  
  const slider = [
  
    {id:1, url:'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/18ce0a8e9b2ad31b.jpg?q=20'},
    {id:2, url:'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/09158220c9cec620.jpeg?q=20'},
    {id:3, url:'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d49aa8f6df335bc5.jpg?q=20'},
    {id:4, url:'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/039ec2390c9d9c67.jpeg?q=20'},
    {id:5, url:'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b8e07ff39439d998.jpg?q=20'}
  ]

  

  return (
    
      <Carousel 
      responsive={responsive}
      swipeable={false}
      draggable={false}
      // showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px" 
      >

        {
          slider.map(images=>(
            <img src={images.url} alt='carousel' />
          ))
        }
      </Carousel>
      
    
    
  )
}

export default HomeSlider;