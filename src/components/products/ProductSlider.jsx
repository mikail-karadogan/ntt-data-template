import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../assets/scss/product-slider.scss";
import { Box, Grid, Typography } from "@mui/material";
import Product from "./Product";

export default function ProductSlider({ productData }) {
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
      <Box component={"div"} mb={3}>
        <Slider {...settings} className="product-slider">
          {productData.map((item, index) => {
            return (
              <Box component="div" key={item.id}>
                <Product data={item} key={item.id} />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </>
  );
}
