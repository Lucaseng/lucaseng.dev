// FullpageComponent.jsx
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import Home from "./Home.tsx";
import About from "./About.tsx";
import TechnicalSkills from "./TechnicalSkills.tsx";
import Projects from "./Projects.tsx";

const FullpageComponent = ({ onFullpageApi }) => {
  const handleFullpageApi = (fullpageApi: fullpageApi) => {
    if (onFullpageApi) {
      onFullpageApi(fullpageApi);
    }
  };

  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      loopBottom={true}
      loopTop={true}
      anchors={["home", "about", "technical-skills", "projects"]}
      render={({ state, fullpageApi }) => {
        if (fullpageApi) {
          handleFullpageApi(fullpageApi);
        }
        return (
          <>
            <div id="fullpage-wrapper">
              <div className="section">
                <Home />
              </div>
              <div className="section">
                <About />
              </div>
              <div className="section">
                <TechnicalSkills />
              </div>
              <div className="section">
                <Projects />
              </div>
            </div>
          </>
        );
      }}
    />
  );
};

export default FullpageComponent;
