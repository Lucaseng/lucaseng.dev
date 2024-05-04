import './App.css'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import FullpageComponent from "./Components/FullPageComponent.tsx";
import Header from "./Components/Header.tsx";

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
            <Header/>
            <FullpageComponent/>
        </ThemeProvider>

    </>
  )
}

export default App
