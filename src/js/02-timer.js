import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const input = document.querySelector("#datetime-picker");
const start = document.querySelector("button[data-start]");
const timer = document.querySelector(".timer");
let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      // console.log(selectedDates[0]);
      // console.log("Date: ", options["defaultDate"]);
      if(selectedDates[0] < options["defaultDate"]) {
        Notiflix.Notify.failure("Please choose a date in the future");
      } else {
        Notiflix.Notify.success();
        start.addEventListener("click", () => {
          setInterval(() => {
            const countDownDate = selectedDates[0].getTime();
            const now = options["defaultDate"].getTime();
            let timeLeft = countDownDate - now;
            console.log(convertMs(timeLeft))
          }, 1000)
        });
      }
    },
  };

const fp = flatpickr(input, options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  if (value < 2) {
    value + 0; 
  }
}