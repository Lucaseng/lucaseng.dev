import { Box, Container, Typography } from "@mui/material";
import ProjectSlice from "./ProjectSlice.tsx";
import constants from "../Data/constants.json";

interface ProjectSliceProps {
  TITLE: string;
  DESCRIPTION: string;
  URL: string;
  BUTTON_TEXT: string;
}

function Projects() {
  const projectArr = constants.PROJECT_ARR.slice(0, 3); //for now display 3 projects
  return (
    <Container maxWidth={"md"}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box>
          <Typography
            sx={{ pb: 3 }}
            fontFamily={"inter"}
            fontWeight={"700"}
            variant="h2"
          >
            Projects.
          </Typography>
          {projectArr.map((project: ProjectSliceProps) => (
            <ProjectSlice
              title={project.TITLE}
              description={project.DESCRIPTION}
              buttonText={project.BUTTON_TEXT}
              url={project.URL}
            />
          ))}
        </Box>
      </div>
    </Container>
  );
}

export default Projects;
