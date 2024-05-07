import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();
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
            variant="h2"
          >
            About Me.
          </Typography>
          <Typography mb={3} fontSize={"1.1em"} variant="body1">
            I graduated with a Bachelor of Science Majoring in Computer Science
            and Statistics from the University of Auckland in September of 2023.
            <span style={{ color: theme.palette.text.secondary }}>
              &nbsp;I'm super excited to begin my career as a graduate software
              engineer at Xero.
            </span>
          </Typography>

          <Typography fontSize={"1.1em"} variant="body1">
            Seeing people thrive motivates me; it's a core part of who I am, and
            I firmly believe that it's very much a core part of the technology
            sector, too; how do we positively disrupt the way people do life? I
            aspire to use my knowledge of software development to maximise
            technology's impact on all people. I want to see how my solutions
            have a real purpose and a real impact on how people connect, work,
            and learn.
          </Typography>
        </Box>
      </div>
    </Container>
  );
}

export default Home;
