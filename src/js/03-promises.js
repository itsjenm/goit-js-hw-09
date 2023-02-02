import Notiflix from 'notiflix';

const delay 

function createPromise(position, delay) {
  const position = document.getElementsByName('amount');
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      // Fulfill
    } else {
      // Reject
    }
  }, position);
}


createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });