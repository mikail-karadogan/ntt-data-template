import React from "react";
import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import '../assets/scss/slider.scss';
import { Box, Typography } from "@mui/material";

export default function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <>
      <Box component={'div'} className="main-slider">
        <Slider {...settings}>
          <Box component={'div'}>
              <img src="../src/assets/images/slider.png" alt="slider" />
          </Box>
          <Box component={'div'}>
            <img src="../src/assets/images/slider-2.png" alt="slider" />
          </Box>
          <Box component={'div'}>
          <img src="../src/assets/images/slider-3.png" alt="slider" />
          </Box>
          <Box component={'div'}>
          <img src="../src/assets/images/slider-4.png" alt="slider" />
          </Box>
        </Slider>
      </Box>
    </>
  );
}
