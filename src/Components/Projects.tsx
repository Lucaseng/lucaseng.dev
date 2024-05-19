import React, { useState } from "react";
import {
  Box,
  Container,
  Grow,
  Pagination,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ProjectSlice from "./ProjectSlice";
import constants from "../Data/constants.json";
import { useTheme } from "@mui/material/styles";

interface ProjectSliceProps {
  TITLE: string;
  DESCRIPTION: string;
  URL: string;
  BUTTON_TEXT: string;
}

function Projects() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [page, setPage] = useState(1);
  const [projectArr, setProjectArr] = useState(
    constants.PROJECT_ARR.slice(0, 2),
  );
  const [fadeIn, setFadeIn] = useState(true);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setFadeIn(false);
    setTimeout(() => {
      setPage(value);
      setProjectArr(constants.PROJECT_ARR.slice(2 * (value - 1), 2 * value));
      setFadeIn(true);
    }, 500);
  };

  return (
    <Container maxWidth={"md"}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ p: isSmallScreen ? 2 : 0 }} minHeight={"60vh"}>
          <Typography
            sx={{ pb: 3 }}
            fontFamily={"inter"}
            fontWeight={"700"}
            variant={isSmallScreen ? "h4" : "h2"}
          >
            Projects.
          </Typography>
          <Grow in={fadeIn} timeout={500}>
            <Box>
              {projectArr.map((project: ProjectSliceProps) => (
                <ProjectSlice
                  key={project.TITLE}
                  title={project.TITLE}
                  description={project.DESCRIPTION}
                  buttonText={project.BUTTON_TEXT}
                  url={project.URL}
                />
              ))}
            </Box>
          </Grow>

          <Pagination
            page={page}
            count={Math.ceil(constants.PROJECT_ARR.length / 2)}
            onChange={handlePageChange}
          />
        </Box>
      </div>
    </Container>
  );
}

export default Projects;
