import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const VerticalLine = () => {
  const theme = useTheme();
  return (
    <Box
      style={{
        width: "1.5px",
        height: "150px",
        backgroundColor: theme.palette.text.primary,
      }}
    ></Box>
  );
};

export default VerticalLine;
