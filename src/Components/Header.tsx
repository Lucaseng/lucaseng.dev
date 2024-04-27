import {AppBar, List, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";

const sections = ["About Me", "Technical Skills", "Projects", "Resume"]


function Header() {
    return (
        <AppBar>
            <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Lucas Eng</Typography>
                <div style={{ display: "flex" }}>
                    <List style={{ display: "inline-flex" }}>
                        {sections.map((section) => (
                            <ListItemButton key={section} sx={{ textAlign: 'center' }}>
                                <ListItemText primary={section} />
                            </ListItemButton>
                        ))}
                    </List>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;