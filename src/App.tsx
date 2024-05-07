import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import FullpageComponent from "./Components/FullPageComponent.tsx";
import Header from "./Components/Header.tsx";
import { fullpageApi } from "@fullpage/react-fullpage";
import { useState } from "react";

function App() {
  const [myFullpageApi, setFullpageApi] = useState();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#112240",
      },
      text: {
        primary: "#bad7f2",
        secondary: "#7ae582",
      },
    },
    typography: {
      fontFamily: "IBM Plex Mono, Inter, Roboto",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <FullpageComponent
          onFullpageApi={(api: fullpageApi) => setFullpageApi(api)}
        />
        <Header myApi={myFullpageApi} />
      </ThemeProvider>
    </>
  );
}

export default App;
