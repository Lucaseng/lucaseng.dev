import { Box, IconButton, Stack, useMediaQuery } from "@mui/material";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import VerticalLine from "./VerticalLine.tsx";

function IconFooter() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      style={{
        position: "fixed",
        bottom: 0,
        left: isSmallScreen ? 5 : 20,
        zIndex: 100,
      }}
    >
      <Stack direction={isSmallScreen ? "row" : "column"} alignItems={"center"}>
        <IconButton
          component="a"
          href="https://github.com/Lucaseng"
          target="_blank"
          style={{ color: theme.palette.text.primary }}
          aria-label="GitHub"
        >
          <GitHub sx={{ fontSize: "2rem" }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/lucas-eng-6b6a68137/"
          target="_blank"
          style={{ color: theme.palette.text.primary }}
          aria-label="LinkedIn"
        >
          <LinkedIn sx={{ fontSize: "2rem" }} />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:hi@lucaseng.dev"
          target="_blank"
          style={{ color: theme.palette.text.primary }}
          aria-label="Mail"
        >
          <MailOutline sx={{ fontSize: "2rem" }} />
        </IconButton>
        {!isSmallScreen && <VerticalLine position={"left"} />}
      </Stack>
    </Box>
  );
}

export default IconFooter;
