const questions = [
  {
    title: "How do you define a valid HTML tag",
    type: "multiple-choice",
    answers: [
      { text: "<html>", correct: true },
      { text: "body", correct: false },
      { text: "<head", correct: false },
      { text: "<link ...", correct: false },
    ],
  },
];

function renderQuestion(question) {
  const title = document.getElementById("question-title");
  title.textContent = question.title;

  const answerContainer = document.querySelector(".answer-container");
  answerContainer.innerHTML = "";

  question.answers.forEach((answer) => {
    const answerElement = document.createElement("div");
    answerElement.classList.add("answer");
    answerElement.textContent = answer.text;
    answerContainer.appendChild(answerElement);
  });
}

renderQuestion(questions[0]);
