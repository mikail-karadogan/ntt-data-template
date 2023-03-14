import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../assets/scss/slider.scss";
import { Box, Typography } from "@mui/material";
import SliderImage from "/src/assets/images/slider.png";
import SliderImage2 from "/src/assets/images/slider-2.png";
import SliderImage3 from "/src/assets/images/slider-3.png";
import SliderImage4 from "/src/assets/images/slider-4.png";

export default function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Box component={"div"} className="main-slider">
        <Slider {...settings}>
          <Box component={"div"}>
            <img src={SliderImage} alt="slider" />
          </Box>
          <Box component={"div"}>
            <img src={SliderImage2} alt="slider" />
          </Box>
          <Box component={"div"}>
            <img src={SliderImage3} alt="slider" />
          </Box>
          <Box component={"div"}>
            <img src={SliderImage4} alt="slider" />
          </Box>
        </Slider>
      </Box>
    </>
  );
}
