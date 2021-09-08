const quizForm = document.querySelector(".quiz-form");
const outputEl = document.querySelector("#output-El");
const submitBtn = document.querySelector("#submit-btn");

const collectAnswers = ["90°", "Right","Acute"];

const calculateScore = () => {
  let score = 0;
  let index = 0;
  const data = new FormData(quizForm);

  for (let value of data.values()) {
    if (value === collectAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputEl.innerText = `your score is ${score}`;
};

submitBtn.addEventListener("click", calculateScore);
