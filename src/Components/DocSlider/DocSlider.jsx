import React from 'react'
import Slider from 'react-slick'

export default function DocSlider() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return <>
   <div className='mt-2 mb-0'>
        <Slider {...settings}>
          <h6>broccoli</h6>
          
          <h6>cauliflower</h6>
          <h6>asparagus</h6>
          <h6>corn</h6>
          <h6>cucumber</h6>
          <h6>green pepper</h6>
          <h6>tomato</h6>
          <h6>beetroot</h6>
          <h6>peas</h6>
          <h6>radish</h6>
          <h6>sweet potato</h6>
          <h6>artichoke</h6>
          <h6>zucchini</h6>
          <h6> carrot</h6>
          <h6>brussel sprouts</h6>
          <h6>pumpkin</h6>
          <h6>potato</h6>
          <h6>onion</h6>
          <h6>mushrooms</h6>
          <h6>lettuce</h6>
        </Slider>
      </div>
  </>
}
