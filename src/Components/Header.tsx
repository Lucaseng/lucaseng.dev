import {AppBar, List, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const sections = ["About Me", "Technical Skills", "Projects", "Resume"]


function Header() {
    const theme = useTheme();

    return (
        <AppBar elevation={0} sx={{backgroundColor: "transparent"}}>
            <Toolbar style={{ backgroundColor: "transparent", display: "flex", justifyContent: "space-between"  }}>
                <Typography color={theme.palette.text.secondary}>Lucas Eng</Typography>
                <div  style={{ display: "flex" }}>
                    <List style={{ display: "inline-flex" }}>
                        {sections.map((section) => (
                            <ListItemButton key={section} sx={{ textAlign: 'center' }}>
                                <ListItemText sx={{color: theme.palette.text.secondary}} primary={section}  />
                            </ListItemButton>
                        ))}
                    </List>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;