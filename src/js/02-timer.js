import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";


const input = document.querySelector(".datetime-picker");
const start = document.querySelector("button[data-start]");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

const fp = flatpickr(input, options);

start.addEventListener("click", fp);

const date = new Date(); 
console.log(date)