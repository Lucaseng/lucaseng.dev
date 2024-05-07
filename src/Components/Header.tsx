import {
  AppBar,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { fullpageApi } from "@fullpage/react-fullpage";

const sections = ["About Me", "Technical Skills", "Projects", "Resume"];

function Header({ myApi }: { myApi: fullpageApi }) {
  const theme = useTheme();

  const handleSectionClick = (sectionIndex: number) => {
    myApi.moveTo(sectionIndex + 1);
  };

  return (
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
      </Toolbar>
    </AppBar>
  );
}

export default Header;
