import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import VerticalLine from "./VerticalLine.tsx";

function EmailFooter() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      style={{
        position: "fixed",
        bottom: 0,
        right: isSmallScreen ? 10 : 35,
        zIndex: 100,
      }}
    >
      <Stack direction={isSmallScreen ? "row" : "column"} alignItems={"center"}>
        <Typography
          sx={{
            pt: 1.5,
            writingMode: "vertical-rl",
            textOrientation: "sideways",
            transform: "rotate(180deg)",
          }}
        >
          hi@lucaseng.dev
        </Typography>
        {!isSmallScreen && <VerticalLine position={"right"} />}
      </Stack>
    </Box>
  );
}

export default EmailFooter;
