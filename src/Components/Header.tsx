import { useState } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { fullpageApi } from "@fullpage/react-fullpage";

const sections = ["About Me", "Technical Skills", "Projects", "Resume"];

function Header({ myApi }: { myApi: fullpageApi }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSectionClick = (sectionIndex: number) => {
    myApi.moveTo(sectionIndex + 1);
    setDrawerOpen(false);
    if (sectionIndex === 4) {
      window.open("/lucaseng-resume-may-2024.pdf", "_blank");
    }
  };

  return (
    <>
      <AppBar elevation={0} sx={{ backgroundColor: "transparent" }}>
        <Toolbar
          style={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <ListItemButton
              onClick={() => {
                handleSectionClick(0);
              }}
            >
              <ListItemText
                sx={{ color: theme.palette.text.secondary }}
                primary={"Lucas Eng"}
              />
            </ListItemButton>
          </div>
          {isSmallScreen ? (
            <>
              <IconButton
                edge="end"
                sx={{ color: theme.palette.text.secondary }}
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    backgroundColor: "#112240",
                  },
                }} // Change background color here
              >
                <List>
                  <ListItemButton
                    onClick={() => {
                      handleSectionClick(0);
                    }}
                    key={"home"}
                  >
                    <ListItemText
                      primary={"Home"}
                      sx={{ color: theme.palette.text.secondary }}
                    />
                  </ListItemButton>
                  {sections.map((section, index) => (
                    <ListItemButton
                      onClick={() => {
                        handleSectionClick(index + 1);
                      }}
                      key={section}
                    >
                      <ListItemText
                        primary={section}
                        sx={{ color: theme.palette.text.secondary }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <div>
              <List style={{ display: "inline-flex" }}>
                {sections.map((section, index) => (
                  <ListItemButton
                    onClick={() => {
                      handleSectionClick(index + 1);
                    }}
                    key={section}
                    sx={{ textAlign: "center" }}
                  >
                    <ListItemText
                      sx={{ color: theme.palette.text.secondary }}
                      primary={section}
                    />
                  </ListItemButton>
                ))}
              </List>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
