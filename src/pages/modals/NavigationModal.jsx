import { Button, Link } from "@mui/material";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { navigationData } from "../layouts/navigationData";
import CloseIcon from '@mui/icons-material/Close';

export default function NavigatinModal({setNavigationModalActive}) {
  const NavigationModalWrapper = styled(Box)({
    position: "fixed",
    backgroundColor: "#FFFFFF",
    zIndex: "9",
    top: "0px",
    bottom: "0px",
    left: "0px",
    padding: "16px",
    right: "0px",
  });

  const NavigationModalList = styled("ul")({
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid #D9D9D9",
  });

  const NavigationModalListItem = styled("li")({});

  const NavigationModalLink = styled(Link)({
    fontSize: "24px",
    fontWeight: 500,
    color: "rgba(0, 0, 0, 1)",
    marginBottom: "24px",
    display: "block",
    textDecoration: "none"
  });

  const NavigationHeader = styled(Box)({
    height: "100px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  });

  return (
    <>
      <NavigationModalWrapper>
        <NavigationHeader>
          <Button
            variant="text"
            sx={{
              color: "#1C1B1F",
              display: "flex",
              justifyContent: "flex-end"
            }}
            onClick = {() => setNavigationModalActive(false)}
          >
            <CloseIcon />
          </Button>
        </NavigationHeader>
        <NavigationModalList>
          {navigationData.map((item) => {
            return (
              <NavigationModalListItem>
                <NavigationModalLink href={item.url}>{item.title}</NavigationModalLink>
              </NavigationModalListItem>
            );
          })}
        </NavigationModalList>
      </NavigationModalWrapper>
    </>
  );
}
