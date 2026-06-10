import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function About() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth={"md"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box>
          <Typography
            mb={3}
            fontFamily={"inter"}
            fontWeight={"700"}
            variant={isSmallScreen ? "h4" : "h2"}
          >
            About Me.
          </Typography>
          <Typography
            mb={3}
            fontSize={isSmallScreen ? "0.9em" : "1.1em"}
            variant="body1"
          >
              Hey!
              <span style={{ color: theme.palette.text.secondary }}>
                  &nbsp;I'm a software engineer at Xero. Over the past three years, I've worked on payments and financial systems that help businesses get paid with confidence.
              </span>
          </Typography>

          <Typography
            fontSize={isSmallScreen ? "0.9em" : "1.1em"}
            variant="body1"
          >
            Finance drives the world forward. 
            Enabling seamless and secure transactions excites me; it's more than just processing payments - it's about building trust and accessibility in the digital economy.
            I believe technology should remove friction, empowering businesses to grow and people to transact with confidence.
             Seeing my work power real-world commerce, from small businesses to global platforms, drives my passion for innovation in the payments space.
          </Typography>
        </Box>
      </div>
    </Container>
  );
}

export default About;
