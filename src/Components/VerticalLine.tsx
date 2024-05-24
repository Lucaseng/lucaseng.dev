import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

interface VerticalLineProps {
  position: string;
}

const VerticalLine = ({ position }: VerticalLineProps) => {
  const theme = useTheme();
  return (
    <Box
      style={{
        width: "1px",
        height: position == "left" ? "150px" : "250px",
        backgroundColor: theme.palette.text.primary,
      }}
    ></Box>
  );
};

export default VerticalLine;
