import React from "react";
import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import { Container, styled } from "@mui/system";
import { navigationData } from "./navigationData";
import { useState } from "react";

const NavList = styled("ul")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "1200px",
  margin: "auto",
  position: "relative",
}));

const NavListItem = styled("li")(({ theme }) => ({
  marginRight: "35px",
  "&:last-child": {
    marginRight: "0px",
  },
}));

const NavListItemLink = styled("div")(({ theme }) => ({
  textDecoration: "none",
  color: "#6a6d70",
  paddingBottom: "10px",
  display: "block",
  width: "max-content",
  borderBottom: "2px solid transparent",

  "&:hover": {
    borderBottomColor: "#0059BC",
    ".sub": {
      display: "block",
      top: "28px",
    },
  },
}));

const NavListItemLinkTitle = styled("a")(({ theme }) => ({
  color: "#6a6d70",
}));

const Sub = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  left: "0px",
  right: "0px",
  backgroundColor: "#f4f5f6",
  padding: "30px 50px",
  display: "none",
  zIndex: 999999999,
}));

const SubMenu = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  height: "300px",
}));

const SubMenuTitle = styled("li")(({ theme }) => ({
  marginBottom: "10px",
}));

const SubMenuItem = styled("li")(({ theme }) => ({
  marginBottom: "10px",
}));

const SubMenuItemLink = styled("a")(({ theme }) => ({
  color: "#000000",
}));

const StyledSelectBox = styled(Select)({
  color: "rgba(106, 109, 112, 1)",
  ".MuiInputBase-input ": {
    padding: "0px",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
  "&.Mui-selected": {
    backgroundColor: "rgba(244, 245, 246, 1) !important",
  },
});

export default function Navigation() {
  const [subMenuDropdown, setSubMenuDropdown] = useState(0);

  return (
    <>
      <Container>
        <nav className="nav">
          <NavList
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
            }}
          >
            {navigationData?.map((item) => {
              return (
                <NavListItem key={item.id + "-navigation-data"}>
                  <NavListItemLink>
                    <NavListItemLinkTitle>{item.title}</NavListItemLinkTitle>
                    {item.subMenu.length > 0 && (
                      <Sub className="sub">
                        <Grid container>
                          <Grid item sm={4} md={4} lg={4}>
                            <SubMenu>
                              {item.subMenu?.map((subMenu) => {
                                return (
                                  <>
                                    <SubMenuTitle>
                                      <Typography variant="h6">
                                        {subMenu.subTitle}
                                      </Typography>
                                    </SubMenuTitle>
                                    {subMenu.child.map((child) => {
                                      return (
                                        <SubMenuItem key={child.id}>
                                          <SubMenuItemLink href="">
                                            {child.title}
                                          </SubMenuItemLink>
                                        </SubMenuItem>
                                      );
                                    })}
                                  </>
                                );
                              })}
                            </SubMenu>
                          </Grid>
                          <Grid item sm={8} md={8} lg={8}>
                            <img
                              src={item?.image}
                              alt="sub-child-photo"
                              width={"100%"}
                            />
                          </Grid>
                        </Grid>
                      </Sub>
                    )}
                  </NavListItemLink>
                </NavListItem>
              );
            })}
          </NavList>

          <NavList
            sx={{
              display: {
                xs: "flex",
                lg: "none",
              },
            }}
          >
            {navigationData.length > 5 &&
              navigationData.slice(0, 5)?.map((item) => {
                return (
                  <NavListItem key={item.id + "-navigation-data"}>
                    <NavListItemLink>
                      <NavListItemLinkTitle>{item.title}</NavListItemLinkTitle>
                    </NavListItemLink>
                  </NavListItem>
                );
              })}
            {navigationData.length > 5 && (
              <NavListItem
                sx={{
                  display: {
                    lg: "none",
                  },
                }}
              >
                <StyledSelectBox
                  value={subMenuDropdown}
                  variant="outlined"
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "rgba(244, 245, 246, 1)",
                        color: "rgba(106, 109, 112, 1)",
                        marginTop: "10px",
                        padding: "12px",

                        ".MuiMenu-list": {
                          padding: "0px",
                        },
                        ".MuiMenuItem-root": {
                          "&.Mui-selected": {
                            backgroundColor:
                              "rgba(244, 245, 246, 1) !important",

                            "&:hover": {
                              backgroundColor: "rgba(244, 245, 246, 1)",
                            },
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={0}>More</MenuItem>
                  {navigationData.slice(5).map((item) => {
                    return (
                      <MenuItem key={item.id} value={item.title}>
                        {item.title}
                      </MenuItem>
                    );
                  })}
                </StyledSelectBox>
              </NavListItem>
            )}
          </NavList>
        </nav>
      </Container>
    </>
  );
}
