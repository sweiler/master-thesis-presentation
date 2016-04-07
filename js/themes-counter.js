var counter = document.getElementById("theme-counter");
var themesElem = document.getElementById("compo-themes");

var themes = themesElem.textContent;
themes = themes.match(/[^\r\n]+/g);

var currentId = 0;
counter.textContent = themes[0];

var step = 0;

function fadeOut() {
  counter.classList.add("invisible");
}

function fadeIn() {
  currentId = (currentId + 1) % themes.length;
  counter.textContent = themes[currentId];
  counter.classList.remove("invisible");
}

function update() {
  if(step === 0) fadeOut();
  else if(step === 1) fadeIn();
  
  
  step = (step + 1) % 4;
}

window.setInterval(update, 500);
