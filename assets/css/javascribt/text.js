const colors = ['#103FFB', '#4D7FFE', '#F20CFE', '#02099A'];
let i = 0;

function changeColor() {
  document.getElementById('color-change').style.color = colors[i];
  i = (i + 1) % colors.length;
}

setInterval(changeColor, 3000);
