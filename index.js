const questionLabel = document.getElementById("question");
const answerInput = document.getElementById("answer");
const submitClicked = document.getElementById("submit");
const scoreLabel = document.getElementById("score");

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const result = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));
scoreLabel.innerHTML = `Score: ${score}`;

const question = `What is ${num1} multiply by ${num2} ?`;

questionLabel.innerText = question;

submitClicked.addEventListener("submit", () => {
  if (Number(answerInput.value) === result) {
    console.log("success");
    score++;
    console.log(score);
    updateLocalStorage();
  } else {
    console.log("error");
    score--;
    updateLocalStorage();
  }
});

const updateLocalStorage = () => {
  localStorage.setItem("score", JSON.stringify(score));
};
