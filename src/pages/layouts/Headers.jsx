import {
  Box,
  Button,
  Grid,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Container, styled } from "@mui/system";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Navigation from "./Navigation";
import NavigatinModal from "../modals/NavigationModal";
import LogoSource from "/src/assets/images/logo.png";

const HeaderTop = styled("div")(({ theme }) => ({
  width: "100%",
  borderBottom: "1px solid #89919a",
}));

const HeaderBottom = styled("div")(({ theme }) => ({
  padding: "25px 25px 15px 25px",
}));

const HeaderWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "25px 0px 15px 0px",

  [theme.breakpoints.down("sm")]: {
    padding: "25px 0px 35px 0px"
  }
}));

const SearchWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  }
}));

const SearchBox = styled("div")(({ theme }) => ({
  width: "680px",
  height: "38px",
  border: "1px solid #89919a",
  borderRadius: "4px",
  display: "flex",

  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "4px 0px 0px 4px",
    },
}));

const SearchContent = styled("input")(({ theme }) => ({
  width: "calc(100% - 132px)",
  border: "none",
  borderRadius: "4px 0px 0px 4px",
  padding: "8px 16px",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const Logo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginBottom: "20px",
  },
}));

export default function Headers() {
  const [searchCategories, setSearchCategories] = useState(0);
  const [navigationModalActive, setNavigationModalActive] = useState(false);

  return (
    <>
      <header>
        <HeaderTop>
          <Container>
            <HeaderWrapper>
              <Logo>
                <Link href="">
                  <img src={LogoSource} alt="logo" />
                </Link>
                <Button
                  variant="text"
                  sx={{
                    display: {
                      md: "none",
                      lg: "none",
                      sm: "none",
                    },
                    color: "#1C1B1F",
                    justifyContent: "flex-end"
                  }}
                  onClick= {()=> setNavigationModalActive(true)}
                >
                  <MenuIcon />
                </Button>
              </Logo>

              <SearchWrapper>
                <SearchBox>
                  <SearchContent type="text" placeholder="Search..." />

                  <Select
                    value={searchCategories}
                    onChange={(e) => setSearchCategories(e.target.value)}
                    sx={{
                      width: "132px",
                      backgroundColor: "#f4f5f6",
                      display: {
                        xs: "none",
                        sm: "flex",
                        md: "flex",
                        lg: "flex",
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "0px",
                        borderRadius: "0px 4px 4px 0px",
                      },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          bgcolor: "#00254F",
                          color: "white",
                          marginTop: "10px",
                          padding: "12px",

                          ".MuiMenu-list": {
                            padding: "0px",
                          },
                          ".MuiMenuItem-root": {
                            "&.Mui-selected": {
                              backgroundColor: "#0059BC !important",

                              "&:hover": {
                                backgroundColor: "#0059BC",
                              },
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value={0}>Categories</MenuItem>
                    <MenuItem value={1}>Tekstil</MenuItem>
                    <MenuItem value={2}>Twenty</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                  </Select>
                </SearchBox>

                <Button
                  variant="contained"
                  sx={{
                    width: {
                      xs: "90px",
                      sm: "100px",
                      md: "110px",
                      lg: "110px",
                    },
                    padding: "12px 47px",
                    height: "38px",
                    marginLeft: {
                      lg: "10px",
                      sm: "10px",
                      xs: "0px",
                    },
                    borderRadius: {
                      xs: "0px 4px 4px 0px",
                      sm: "4px"
                    },
                    backgroundColor: "#0059BC",
                  }}
                >
                  <SearchIcon></SearchIcon>
                </Button>
              </SearchWrapper>
            </HeaderWrapper>
          </Container>
        </HeaderTop>
        <HeaderBottom
          sx={{
            display: {
              xs: "none",
              sm: "flex",
              md: "flex",
              lg: "flex",
            },
          }}
        >
          <Navigation />
        </HeaderBottom>
      </header>
      {
        navigationModalActive && (
          <NavigatinModal setNavigationModalActive = {setNavigationModalActive} />
        )
      }
    </>
  );
}
