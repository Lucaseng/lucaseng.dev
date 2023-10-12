const linkArr = ["p1-link", "p2-link", "p3-link", "p4-link"];

new fullpage("#fullpage", {
  // Navigation
  loopTop: true,
  loopBottom: true,
  anchors: ["p1", "p2", "p3", "p4"],
  afterLoad: function (origin, destination, direction, trigger) {
    document.getElementById(`${origin.anchor}-link`).style.textDecorationColor =
      "transparent";
    document.getElementById(
      `${destination.anchor}-link`
    ).style.textDecorationColor = "#7ae582";

    if (destination.anchor === "p3") {
      techSkillTypeWriter();
    }
  },
});

let myArr = [
  `mySkills.forEach((skill) => {console.log(skill)})`,
  "JavaScript (ES6+, Node.js, React)",
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

function typeWriter() {
  let typewriter = new Typewriter(document.getElementById("demo"), {
    loop: false,
    delay: 30,
  });

  typewriter
    .typeString("> I'm stoked to be an incoming Graduate Engineer at Xero!")
    .start();
}

function techSkillTypeWriter() {
  var app = document.getElementById("mySkills");
  if (app.innerText.length > 10) return;

  var typewriter = new Typewriter(app, {
    loop: false,
    delay: 30,
  });

  typewriter
    .typeString(`mySkills.forEach((skill) => {csl.log(skill)})`)
    .pauseFor(600)
    .deleteChars(15)
    .typeString(`onsole.log(skill)}<br>`)
    .changeDelay(20);

  for (let i = 1; i < myArr.length; i++) {
    typewriter.typeString("<br>" + myArr[i]).start();
  }
}

window.onload = typeWriter();
