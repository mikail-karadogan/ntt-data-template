import React from "react";
import {
  Button,
  Grid,
  InputBase,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterContentWrapper = styled("ul")(({theme})=>({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  marginTop: "30px",

  [theme.breakpoints.down("sm")]: {
      display: "none"
  }
}));

const FooterContentItem = styled("li")({});
const FooterSubContentWrapper = styled("ul")({});
const FooterSubContentItem = styled("li")({});
const FooterSubContentLink = styled(Link)({
  color: "rgba(255, 255, 255, 1)",
  marginBottom: "12px",
  display: "block",
  textTransform: "none",
});

const FooterContentTitle = styled(Typography)({
  fontSize: "1.5rem",
  color: "rgba(255, 255, 255, 1)",
  fontWeight: 500,
  marginBottom: "24px",
});

const FooterLogo = styled("img")({
  width: "170px",
});

const FooterContentText = styled(Typography)({
  color: "rgba(255, 255, 255, 1)",
  fontWeight: 400,
  marginTop: "25px",
  maxWidth: "400px",
});

const FooterSignupWrapper = styled("div")({
  maxWidth: "375px",
  height: "38px",
  marginTop: "55px",
});

const FooterEmailInput = styled("input")(({ theme }) => ({
  width: "calc(100% - 100px)",
  height: "inherit",
  backgroundColor: "white",
  border: "none",
  padding: "10px",

  [theme.breakpoints.down("sm")]: {

  }
}));

const FooterSignupButton = styled(Button)(({ theme }) => ({
  width: "100px",
  height: "inherit",
  backgroundColor: "#00254F",
  color: "rgba(255, 255, 255, 1)",
  border: "none",
  borderRadius: "0px",
  textTransform: "none",
  padding: "0px 15px 0px 30px",
  verticalAlign: "bottom",

  "&:hover": {
    backgroundColor: "#00254F",
  },
}));

const FooterSocialItem = styled(Link)({
  marginRight: "30px",
  "&:last-child": {
    marginRight: "0px",
  },
});

export default function Footer() {

  return (
    <>
      <Box component="footer" sx={{ backgroundColor: "#0059BC" }}>
        <Box component="div" sx={{ padding: "65px 0px" }}>
          <Container>
            <Grid container>
              <Grid item xs={9} sm={7} md={7} lg={7}>
                <Box component="div">
                  <FooterLogo
                    src="src/assets/images/footer-logo.png"
                    alt="footer-logo"
                  />
                </Box>
                <Box component="div" className="footer-content">
                  <FooterContentText variant="inherit">
                    Lorem ipsum dolor sit amet consectetur. Auctor tempor
                    pretium aliquam neque.
                  </FooterContentText>
                </Box>
                <FooterSignupWrapper>
                  <FooterEmailInput type="text" placeholder="Email" />
                  <FooterSignupButton type="button">Sign Up</FooterSignupButton>
                </FooterSignupWrapper>
              </Grid>
              <Grid item xs={12} sm={5} md={5} lg={5}>
              <FooterContentWrapper>
                  <FooterContentItem>
                    <FooterContentTitle variant="h3">Title</FooterContentTitle>
                    <FooterSubContentWrapper>
                      <FooterSubContentItem>
                        <FooterSubContentLink href="" underline="none">
                          Subtitle
                        </FooterSubContentLink>
                        <FooterSubContentLink href="" underline="none">
                          Subtitle
                        </FooterSubContentLink>
                        <FooterSubContentLink href="" underline="none">
                          Subtitle
                        </FooterSubContentLink>
                        <FooterSubContentLink href="" underline="none">
                          Subtitle
                        </FooterSubContentLink>
                      </FooterSubContentItem>
                    </FooterSubContentWrapper>
                  </FooterContentItem>
                  <FooterContentItem>
                    <FooterContentTitle variant="h3">Title</FooterContentTitle>
                    <FooterSubContentWrapper>
                      <FooterSubContentItem>
                        <FooterSubContentLink href="" underline="none">
                          Subtitle
                        </FooterSubContentLink>
                        <FooterSubContentLink href="" underline="none">
                          Subtitle
                        </FooterSubContentLink>
                        <FooterSubContentLink href="" underline="none">
                          Subtitle
                        </FooterSubContentLink>
                        <FooterSubContentLink href="" underline="none">
                          Subtitle
                        </FooterSubContentLink>
                      </FooterSubContentItem>
                    </FooterSubContentWrapper>
                  </FooterContentItem>
                  <FooterContentItem>
                    <FooterContentTitle variant="h3">Title</FooterContentTitle>
                    <FooterSubContentWrapper>
                      <FooterSubContentItem>
                        <FooterSubContentLink href="" underline="none">
                          Subtitle
                        </FooterSubContentLink>
                        <FooterSubContentLink href="" underline="none">
                          Subtitle
                        </FooterSubContentLink>
                        <FooterSubContentLink href="" underline="none">
                          Subtitle
                        </FooterSubContentLink>
                        <FooterSubContentLink href="" underline="none">
                          Subtitle
                        </FooterSubContentLink>
                      </FooterSubContentItem>
                    </FooterSubContentWrapper>
                  </FooterContentItem>
                </FooterContentWrapper>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          component="div"
          sx={{ padding: "20px 0px", borderTop: "2px solid #D9D9D9" }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link
                href=""
                sx={{ color: "rgba(255, 255, 255, 1)" }}
                underline="none"
              >
                contact@nttdata.com
              </Link>
              <Link
                href=""
                sx={{ color: "rgba(255, 255, 255, 1)" }}
                underline="none"
              >
                +3 9876 765 444
              </Link>
              <Box component="div" sx={{
                display: {
                  xs: "none",
                  sm: "flex"
                }
              }}>
                <FooterSocialItem
                  href=""
                  underline="none"
                  sx={{ color: "rgba(255, 255, 255, 1)" }}
                >
                  <InstagramIcon />
                </FooterSocialItem>

                <FooterSocialItem
                  href=""
                  underline="none"
                  sx={{ color: "rgba(255, 255, 255, 1)" }}
                >
                  <FacebookIcon />
                </FooterSocialItem>
                <FooterSocialItem
                  href=""
                  underline="none"
                  sx={{ color: "rgba(255, 255, 255, 1)" }}
                >
                  <LinkedInIcon />
                </FooterSocialItem>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
