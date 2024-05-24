import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import FullpageComponent from "./Components/FullPageComponent.tsx";
import Header from "./Components/Header.tsx";
import { fullpageApi } from "@fullpage/react-fullpage";
import { useState } from "react";
import IconFooter from "./Components/IconFooter.tsx";
import EmailFooter from "./Components/EmailFooter.tsx";

function App() {
  const [myFullpageApi, setFullpageApi] = useState<fullpageApi>();
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
        <div style={{ position: "relative", zIndex: 1 }}>
          <IconFooter />
          <EmailFooter />
          <FullpageComponent
            onFullpageApi={(api: fullpageApi) => setFullpageApi(api)}
          />
          {myFullpageApi && <Header myApi={myFullpageApi} />}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
