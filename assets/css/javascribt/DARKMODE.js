function toggleDarkMode() {
  var body = document.querySelector('body');
  body.classList.toggle('dark-mode');
  
  var sunIcon = document.getElementById("sun-icon");
  var moonIcon = document.getElementById("moon-icon");
  
  if (body.classList.contains("dark-mode")) {
    sunIcon.style.opacity = "0";
    moonIcon.style.opacity = "1";
    body.style.backgroundColor = "#000 ";
  } else {
    sunIcon.style.opacity = "1";
    moonIcon.style.opacity = "0";
    body.style.backgroundColor = "#fff";
  }
}
const toggleModeButton = document.getElementById("toggle-mode");
const bodyElement = document.querySelector("body");

toggleModeButton.addEventListener("click", function() {
  bodyElement.classList.toggle("dark-mode");
});

