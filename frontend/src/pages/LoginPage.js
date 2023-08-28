import { Helmet } from "react-helmet-async";
// @mui
import { styled } from "@mui/material/styles";
import { Container, Typography, Box } from "@mui/material";
// hooks
import useResponsive from "../hooks/useResponsive";
// components
import Logo from "../components/logo";
// sections
import { LoginForm } from "../sections/auth/login";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledSection = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive("up", "md");

  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <StyledRoot>
        {!mdUp ? (
          <Logo
            sx={{
              position: "fixed",
              top: { xs: 16, sm: 24, md: 40 },
              left: { xs: 16, sm: 24, md: 40 },
            }}
          />
        ) : null}

        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img
              src="/assets/illustrations/illustration_login.png"
              alt="login"
            />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            {mdUp ? (
              <Box width="100%" display="flex" justifyContent={"center"}>
                <img
                  src="../assets/images/menu/Feyverly-Logo.webp"
                  width="150px"
                  height="70px"
                />
              </Box>
            ) : null}
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
