import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";
import { getProducts, setProducts } from "../../store/productSlice";
import { Box, Container, fontSize, styled } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EastIcon from "@mui/icons-material/East";
import Product from "./Product";
import ProductSlider from "./ProductSlider";

const ProductWrapperHead = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

const FavoritSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& .favorite-icon": {
    verticalAlign: "bottom",
    marginRight: "5px",
    fontSize: "20px",
  },
  "& .button-liked": {
    marginLeft: "20px",
    backgroundColor: "rgba(0, 89, 188, 1)",
    padding: "4px 8px",
    textTransform: "capitalize",
  },
}));

const MoreProductBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "#0059BC",
  color: "#FFFFFF",
  fontWeight: "300",
  marginTop: "10px",
  textTransform: "none",
}));

const ProductWrapperTitle = styled("h3")(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 500,

  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

export default function ProductWrapper() {
  const { products, favoriteProducts } = useSelector(({ product }) => product);

  const dispatch = useDispatch();

  const [visibleProduct, setVisibleProduct] = useState(4);
  const [likedStatus, setLikedStatus] = useState(false);

  const likedProducts = () => {
    setLikedStatus(!likedStatus);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setVisibleProduct(4);
  }, [likedStatus]);

  useEffect(()=> {
    favoriteProducts.length == 0 && setLikedStatus(false)
  }, [favoriteProducts])

  return (
    <>
      <Box component="section" mt={7}>
        <Container>
          <ProductWrapperHead>
            <ProductWrapperTitle>Content title goes here</ProductWrapperTitle>
            <FavoritSection>
              <Box component="span">
                <FavoriteBorderIcon className="favorite-icon" />
                {favoriteProducts.length} Ürün
              </Box>
              {favoriteProducts.length > 0 && (
                <Button
                  variant="contained"
                  className="button-liked"
                  onClick={() => likedProducts()}
                >
                  Beğenilenler
                </Button>
              )}
            </FavoritSection>
          </ProductWrapperHead>
          <Grid
            container
            mt={4}
            rowSpacing={0}
            columnSpacing={3}
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            {(!likedStatus ? products : favoriteProducts)
              .slice(0, visibleProduct)
              .map((product, index) => {
                return (
                  <Grid
                    item
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    mb={3}
                    key={product.id}
                  >
                    <Product data={product} />
                  </Grid>
                );
              })}
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              mb={12}
              textAlign="center"
            >
              {visibleProduct <
                (!likedStatus ? products : favoriteProducts).length && (
                <MoreProductBtn
                  variant="contained"
                  endIcon={<EastIcon />}
                  onClick={() => setVisibleProduct((prev) => prev + 4)}
                >
                  Daha fazla
                </MoreProductBtn>
              )}
            </Grid>
          </Grid>
          <Box
            component="div"
            mt={4}
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <ProductSlider
              productData={
                !likedStatus
                  ? products.slice(0, 4)
                  : favoriteProducts.slice(0, 4)
              }
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
