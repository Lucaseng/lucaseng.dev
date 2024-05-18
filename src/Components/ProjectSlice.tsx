import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ProjectSliceProps {
  title: string;
  description: string;
  url: string;
  buttonText: string;
}

function ProjectSlice({
  title,
  description,
  url,
  buttonText,
}: ProjectSliceProps) {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ pb: 4 }}>
        <Typography
          sx={{ pb: 1.5 }}
          fontFamily={"inter"}
          fontWeight={"500"}
          variant="h5"
        >
          {title}
        </Typography>
        <Typography sx={{ pb: 1.5, fontSize: "1.1em" }}>
          {description}
        </Typography>
        <Button
          sx={{
            pl: 3,
            pr: 3,
            fontSize: "1.1em",
            borderRadius: "30px",
            textTransform: "none",
            color: theme.palette.text.secondary,
            borderColor: theme.palette.text.secondary,
            "&:hover": {
              backgroundColor: "rgba(122,229,130, 0.1)",
              borderColor: theme.palette.text.secondary,
            },
          }}
          target="_blank"
          href={url}
          variant="outlined"
        >
          {buttonText}
        </Button>
      </Box>
    </>
  );
}

export default ProjectSlice;
