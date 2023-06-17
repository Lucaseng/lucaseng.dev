new fullpage("#fullpage", {
  // Navigation
  loopTop: true,
  loopBottom: true,
});

let i = 0;
let txt = "> I’m a recent Computer Science and Statistics Graduate.";
let speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter();
