import { Box, Container, Typography } from "@mui/material";

function Projects() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          //justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box>
          <Typography fontFamily={"inter"} fontWeight={"700"} variant="h2">
            Projects.
          </Typography>
        </Box>
      </div>
    </Container>
  );
}

export default Projects;
