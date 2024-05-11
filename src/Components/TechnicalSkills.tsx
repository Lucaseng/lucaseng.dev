import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

interface TechnicalSkillsProps {
  activeSection: number;
}

let myArr = [
  `mySkills.forEach((skill) => {console.log(skill)})`,
  "JavaScript (ES6+, Node.js, React)",
  "TypeScript",
  "Java",
  "Python",
  "C#",
  "AWS",
  "Azure",
  "Git",
  "R",
  "SQL",
  "HTML",
  "CSS",
  "Proof Methods",
  "Probability & Probability Distributions",
  "Markov Chains",
  "Linear Algebra",
  "Basic Data Analysis (Regression)",
  ">>",
];

function TechnicalSkills({ activeSection }: TechnicalSkillsProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    if (activeSection == 2 && !hasRendered) {
      setHasRendered(true);
    }
  }, [activeSection]);

  return (
    <Container maxWidth={"md"}>
      <div
        style={{
          display: "flex",
          //justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box>
          <Typography
            sx={{ mb: 4 }}
            fontFamily={"inter"}
            fontWeight={"700"}
            variant={isSmallScreen ? "h4" : "h2"}
          >
            Technical Skills.
          </Typography>
          <Box
            sx={{
              fontSize: isSmallScreen ? "0.9em" : "1em",
              color: theme.palette.text.secondary,
            }}
          >
            {hasRendered && (
              <Typewriter
                options={{
                  delay: 30,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .pauseFor(800)
                    .deleteAll()
                    .typeString("mySkills.forEach((skill) => {csl.log(skill)})")
                    .start()
                    .pauseFor(600)
                    .deleteChars(15)
                    .typeString(`onsole.log(skill)}<br>`)
                    .changeDelay(20);

                  for (let i = 1; i < myArr.length; i++) {
                    typewriter.typeString("<br>" + myArr[i]).start();
                  }
                }}
              />
            )}
          </Box>
        </Box>
      </div>
    </Container>
  );
}

export default TechnicalSkills;
