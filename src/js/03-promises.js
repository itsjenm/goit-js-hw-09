import * as Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = document.querySelector('[name="delay"]');
const amount = document.querySelector('[name="amount"]');
const increment = document.querySelector('[name="step"]');
const start = document.querySelector('[type="submit"]');

//Write a script that, when submitting the form, calls the createPromise(position, delay) function as many times as you entered in the amount field\

form.addEventListener('submit', submittedPromises);

function submittedPromises(event) {
  // get values from form inputs and save it to object every time event is called
  event.preventDefault();

  let firstDelay = parseInt(delay.value);
  const incrementDelay = parseInt(increment.value);
  const totalPromises = parseInt(amount.value);

  // console.log(firstDelay)
  // console.log(incrementDelay)
  // console.log(amountOfPromise)

  let position; //sequence number of promise

  for (position = 1; position <= totalPromises; position++) {
    createPromise(position, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      });

    firstDelay += incrementDelay;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
