import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// DOM Elements
const input = document.querySelector('#datetime-picker');
const start = document.querySelector('button[data-start]');
const timer = document.querySelector('.timer');

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    // console.log("Date: ", options["defaultDate"]);
    let now = Date.now();
    // console.log(now)
    let end = new Date(selectedDates).getTime();

    if (end < now) {
      Notiflix.Notify.failure('Please choose a date in the future');
      start.disabled = true;
    } else {
      start.disabled = false;
    }
  },
});

// Start counter after clicking start
start.addEventListener('click', () => {
  Notiflix.Notify.success();
  input.disabled = true;
  start.disabled = true;
  const selectedDate = input.value;
  const countdown = setInterval(() => {
  
    let now = Date.now();
    let end = new Date(selectedDate).getTime();
    let difference = end - now;

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
    let convertedTime = convertMs(difference);

    timer.querySelector('[data-days]').innerHTML = convertedTime.days
      .toString()
      .padStart(2, '0');
    timer.querySelector('[data-hours]').innerHTML = convertedTime.hours
      .toString()
      .padStart(2, '0');
    timer.querySelector('[data-minutes]').innerHTML = convertedTime.minutes
      .toString()
      .padStart(2, '0');
    timer.querySelector('[data-seconds]').innerHTML = convertedTime.seconds
      .toString()
      .padStart(2, '0');

    // When count down is over set counter to 0
    if (difference <= 0) {
      clearInterval(countdown);
      Notiflix.Notify.success('The countdown is over! ');
      timer.querySelector('[data-days]').innerHTML = '00';
      timer.querySelector('[data-hours]').innerHTML = '00';
      timer.querySelector('[data-minutes]').innerHTML = '00';
      timer.querySelector('[data-seconds]').innerHTML = '00';
    }
  }, 1000);
});
