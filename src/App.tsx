import './App.css'
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Header from "./Components/Header.tsx";
import Home from "./Components/Home.tsx";

function App() {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
        typography: {
            fontFamily: "Space Mono, Inter, Roboto"
        }
    });

  return (
    <>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container sx={{display:"flex", flexDirection:"column"}} maxWidth="lg">
                <Header/>
                <Home/>
            </Container>

        </ThemeProvider>

    </>
  )
}

export default App
