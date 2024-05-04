import './App.css'
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Header from "./Components/Header.tsx";
import Home from "./Components/Home.tsx";

function App() {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: '#112240',
            },
            text: {
                primary: "#bad7f2",
                secondary: "#7ae582"

            }
        },
        typography: {
            fontFamily: "IBM Plex Mono, Inter, Roboto"
        }
    });

  return (
    <>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box>
                <Header/>
                <Home/>
            </Box>

        </ThemeProvider>

    </>
  )
}

export default App
