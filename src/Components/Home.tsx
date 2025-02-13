import { useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Fade,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Typewriter from "typewriter-effect";
import { GridLoader } from "react-spinners";

function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 500);
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {!imageLoaded ? (
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <GridLoader size={10} color={theme.palette.text.primary} />
              <Typography sx={{ pt: 3 }}>Loading Resources</Typography>
              <Typography>Sit Tight, This Won't Take Long!</Typography>
            </Box>
            <Avatar
              alt="Lucas Eng"
              src="lucaseng-v2.jpg"
              sx={{
                width: 150,
                height: 150,
                display: "none",
              }}
              onLoad={handleImageLoad}
            />
          </div>
        ) : (
          <Fade in={imageLoaded} timeout={1000}>
            <Box>
              <Stack
                direction="row"
                spacing={2}
                paddingBottom={4}
                alignItems="center"
                justifyContent="center"
              >
                {isSmallScreen ? (
                  <>
                    <Typography
                      fontFamily={"inter"}
                      fontWeight={"700"}
                      variant="h3"
                    >
                      Kia Ora,
                      <br /> I'm Lucas.
                    </Typography>
                    <Avatar
                      alt="Lucas Eng"
                      src="lucaseng-v2.jpg"
                      sx={{
                        width: 150,
                        height: 150,
                      }}
                    />
                  </>
                ) : (
                  <>
                    <Typography
                      fontFamily={"inter"}
                      fontWeight={"700"}
                      variant="h1"
                    >
                      Kia Ora,
                      <br /> I'm Lucas.
                    </Typography>
                    <Avatar
                      alt="Lucas Eng"
                      src="lucaseng-v2.jpg"
                      sx={{
                        width: 230,
                        height: 230,
                        marginLeft: 4,
                        marginRight: 4,
                      }}
                    />
                  </>
                )}
              </Stack>
              <Box
                color={theme.palette.text.secondary}
                style={{
                  fontSize: "1.33em",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <Box sx={{ fontSize: isSmallScreen ? "0.9em" : "1em" }}>
                  <Typewriter
                    options={{
                      delay: 30,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "> I'm stoked to be an Associate Software Engineer at Xero!",
                        )
                        .start();
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Fade>
        )}
      </div>
    </Container>
  );
}

export default Home;
