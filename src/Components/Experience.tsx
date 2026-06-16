import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

const timelineItems = [
  {
    date: "Feb 2024",
    title: "Graduate Engineer",
  },
  {
    date: "Feb 2025",
    title: "Associate Engineer",
  },
  {
    date: "Jul 2026",
    title: "Engineer",
  },
];

interface CareerTimelineProps {
  activeSection: number;
}

function Experience({ activeSection }: CareerTimelineProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    if (activeSection == 2 && !hasRendered) {
      setHasRendered(true);
    }
  }, [activeSection, hasRendered]);

  return (
    <Container maxWidth={"md"}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            sx={{ mb: isSmallScreen ? 4 : 5 }}
            fontFamily={"inter"}
            fontWeight={"700"}
            variant={isSmallScreen ? "h4" : "h2"}
          >
            Experience.
          </Typography>

          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: isSmallScreen ? "0.9em" : "1.1em",
              mb: isSmallScreen ? 4 : 5,
            }}
          >
            Xero
          </Typography>

          <Stack spacing={isSmallScreen ? 5 : 7}>
            {timelineItems.map((item, index) => (
              <Box
                key={item.title}
                sx={{
                  display: "grid",
                  gridTemplateColumns: isSmallScreen ? "1fr" : "140px 1fr",
                  gap: isSmallScreen ? 1 : 4,
                  position: "relative",
                  pl: isSmallScreen ? 4 : 0,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: isSmallScreen ? 5 : 149,
                    top: 13,
                    bottom: isSmallScreen ? -53 : -69,
                    width: "1px",
                    backgroundColor: theme.palette.text.primary,
                    opacity: 0.45,
                    transform: hasRendered ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top",
                    transition: "transform 700ms ease",
                    transitionDelay: `${index * 180 + 220}ms`,
                  },
                  "&:last-of-type::before": {
                    display: "none",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: isSmallScreen ? "0.85em" : "1em",
                    pt: 0.3,
                    opacity: hasRendered ? 1 : 0,
                    transform: hasRendered ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 500ms ease, transform 500ms ease",
                    transitionDelay: `${index * 180}ms`,
                  }}
                >
                  {item.date}
                </Typography>

                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: isSmallScreen ? -32 : -28,
                      top: 8,
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: theme.palette.text.secondary,
                      boxShadow: "0 0 0 6px rgba(122, 229, 130, 0.12)",
                      opacity: hasRendered ? 1 : 0,
                      transform: hasRendered ? "scale(1)" : "scale(0.45)",
                      transition: "opacity 450ms ease, transform 450ms ease",
                      transitionDelay: `${index * 180 + 120}ms`,
                    },
                  }}
                >
                  <Typography
                    fontFamily={"inter"}
                    fontWeight={"500"}
                    variant={isSmallScreen ? "body1" : "h5"}
                    sx={{
                      opacity: hasRendered ? 1 : 0,
                      transform: hasRendered
                        ? "translateY(0)"
                        : "translateY(8px)",
                      transition: "opacity 500ms ease, transform 500ms ease",
                      transitionDelay: `${index * 180 + 80}ms`,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </div>
    </Container>
  );
}

export default Experience;
