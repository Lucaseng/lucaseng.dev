// FullpageComponent.jsx
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import Home from "./Home.tsx";
import About from "./About.tsx";
import TechnicalSkills from "./TechnicalSkills.tsx";
import Projects from "./Projects.tsx";
import { useState } from "react";

interface FullpageComponentProps {
  onFullpageApi: (fullpageApi: fullpageApi) => void;
}

const FullpageComponent = ({ onFullpageApi }: FullpageComponentProps) => {
  const [activeSection, setActiveSection] = useState<number>(0);

  const handleSectionChange = (_origin: any, destination: any) => {
    setActiveSection(destination.index);
  };

  const handleFullpageApi = (fullpageApi: fullpageApi) => {
    if (onFullpageApi) {
      onFullpageApi(fullpageApi);
    }
  };

  return (
    <ReactFullpage
      onLeave={handleSectionChange}
      licenseKey={""}
      scrollingSpeed={1000}
      loopBottom={true}
      loopTop={true}
      anchors={["home", "about", "technical-skills", "projects"]}
      // @ts-expect-error state is un-used
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
                <TechnicalSkills activeSection={activeSection} />
              </div>
              <div className="section">
                <Projects />
              </div>
            </div>
          </>
        );
      }}
      credits={{ enabled: false }}
    />
  );
};

export default FullpageComponent;
