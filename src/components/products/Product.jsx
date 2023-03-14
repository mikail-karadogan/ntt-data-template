import React, { useState } from "react";
import { Link, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import {
  setFavoriteProducts,
  deletedFavoriteProduct,
} from "../../store/productSlice";

const ProductCart = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  border: "1px solid rgba(230, 230, 230, 1)",
  borderRadius: "4px",
  padding: "13px",
}));

const ProductImageWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  position: "relative",
}));

const ProductImage = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: "3px 3px 0px 0px",
}));

const ProductContent = styled("div")({
  marginBottom: "10px",
  fontSize: "12px",
  lineHeight: "14px",
});

const ContentTitle = styled(Typography)({
  fontWeight: "500",
  marginBottom: "10px",
});

const FavoriteWrapper = styled(Link)(({ theme }) => ({
  width: "24px",
  height: "24px",
  borderRadius: "100%",
  backgroundColor: "#FFFFFF",
  position: "absolute",
  right: "10px",
  top: "10px",
  zIndex: "2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  "&.active": {
    backgroundColor: "red",
  },
  "&.active .favorite-icon": {
    fill: "white",
  },
}));

const FavoriteIcon = styled(FavoriteBorderIcon)(({ theme }) => ({
  fontSize: "18px !important",
  color: "#D1D1D1",
}));

const ProductTitle = styled(Typography)({
  fontSize: "1rem",
  fontWeight: "600",
  lineHeight: "19px",
  margin: "10px 0px 5px 0px",
});

const ProductPrice = styled("div")({
  backgroundColor: "#E6EEF8",
  padding: "4px 8px",
  marginBottom: "10px",
  fontSize: "14px",
  fontWeight: "700",
});

const ContentDescription = styled(Typography)({
  fontWeight: "400",
});

const Shipping = styled(Typography)({
  fontSize: "10px",
  lineHeight: "12px",
  fontWeight: "400",
});

export default function Product({ data }) {
  const dispatch = useDispatch();

  const [productData, setProductData] = useState(data);
  const { favoriteProducts } = useSelector(({ product }) => product);

  const favoriteProductAction = (event, item) => {
    try {
      event.preventDefault();
      let hasFavoriteProduct = favoriteProducts?.findIndex(
        (element) => element.id == item.id
      );
      
      if (hasFavoriteProduct !== -1) {
        dispatch(deletedFavoriteProduct(item));
      } else {
        dispatch(setFavoriteProducts(item));
      }
    } catch (err) {
      console.log(err);
    }
  };
  const favoriteProductFind = (id) => {
    let hasFavoriteProduct = favoriteProducts?.findIndex(
      (element) => element.id == id
    );

    return hasFavoriteProduct !== -1 ? "active" : "";
  };
  const priceFormat = (price) => {
    const currency_symbol = "₺";
    const formatedPrice = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(price);
    return formatedPrice.replace(currency_symbol, "").concat(" TL");
  };

  return (
    <>
      <Link href="" sx={{ color: "#00254F" }} underline="none" key={data.id}>
        <ProductCart>
          <ProductImageWrapper>
            <ProductImage src={productData?.imageUrl} />
            <FavoriteWrapper
              className={`${favoriteProductFind(productData?.id)}`}
              onClick={(event) => favoriteProductAction(event, productData)}
            >
              <FavoriteIcon className="favorite-icon" />
            </FavoriteWrapper>
          </ProductImageWrapper>
          <Box>
            <ProductTitle variant="subtitle1">{productData.name.length > 25 ? productData.name.substr(0, 25).concat("...") : productData.name}</ProductTitle>
            <ProductPrice>{priceFormat(productData?.price)}</ProductPrice>
            <ProductContent>
              <ContentTitle variant="inherit">Description</ContentTitle>
              <ContentDescription variant="inherit">
                {productData?.description}
              </ContentDescription>
            </ProductContent>
            <Shipping variant="inherit">{productData?.shippingMethod}</Shipping>
          </Box>
        </ProductCart>
      </Link>
    </>
  );
}
