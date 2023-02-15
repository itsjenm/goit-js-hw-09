const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]')
let timerId = null;

const changeColor = () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  return timerId
};

stopButton.disabled = true;

startButton.addEventListener('click', () => {
  stopButton.disabled = false;
  startButton.disabled = true;
  changeColor()
});

stopButton.addEventListener('click', () => {
  startButton.disabled = false
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



