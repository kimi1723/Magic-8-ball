const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const ball = document.querySelector('img');
const answers = ['answer 1', 'answer 2', 'answer 3', 'answer 4', 'answer 5'];


const answerQuestion = () => {
  ball.classList.toggle('shake-animation');
  setTimeout(() => ball.classList.toggle('shake-animation'), 100);


  if (input.value !== '' && input.value.slice(-1) === '?') {
    answer.innerHTML = `<span> Answer: </span>${answers[Math.floor(Math.random() * answers.length)]}`;
    error.textContent = ''
  } else {
    error.textContent = 'Ask a proper question!';
  }
};

ball.addEventListener('click', answerQuestion);
