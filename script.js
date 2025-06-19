let userName = "";
let userAge = "";
let selectedCategory = "";
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;

// DOM elements
const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

function showInstructions() {
  const nameInput = document.getElementById("name").value.trim();
  const ageInput = document.getElementById("age").value.trim();
  const categoryInput = document.getElementById("category").value;

  if (!nameInput || !ageInput) {
    alert("Please enter both name and age.");
    return;
  }

  userName = nameInput;
  userAge = ageInput;
  selectedCategory = categoryInput;

  document.getElementById("user-form").style.display = "none";
  document.getElementById("instructions").style.display = "block";
}

function startQuiz() {
  document.getElementById("instructions").style.display = "none";
  document.getElementById("question-container").style.display = "block";

  fetch(`https://opentdb.com/api.php?amount=5&category=${selectedCategory}&type=multiple`)
    .then(res => res.json())
    .then(data => {
      questions = data.results.map(q => {
        const answers = [
          ...q.incorrect_answers.map(ans => ({ text: decodeHTML(ans), correct: false })),
          { text: decodeHTML(q.correct_answer), correct: true },
        ];
        return {
          question: decodeHTML(q.question),
          answers: shuffleArray(answers),
        };
      });
      showQuestion();
    })
    .catch(err => {
      questionEl.innerText = "Failed to load questions.";
      console.error(err);
    });
}

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
  resetState();
  let current = questions[currentQuestionIndex];
  questionEl.innerText = current.question;

  current.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.onclick = () => selectAnswer(btn, answer.correct);
    answerButtons.appendChild(btn);
  });

  startTimer();
}

function resetState() {
  feedback.innerText = "";
  answerButtons.innerHTML = "";
  clearInterval(timer);
  timeLeft = 60;
  timerDisplay.innerText = "Time Left: 60s";
  nextButton.style.display = "none";
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      feedback.innerText = "⏰ Time's up!";
      disableOptions();
      nextButton.style.display = "block";
    }
  }, 1000);
}

function disableOptions() {
  const allButtons = answerButtons.querySelectorAll("button");
  allButtons.forEach(btn => btn.disabled = true);
}

function selectAnswer(button, correct) {
  disableOptions();
  clearInterval(timer);

  if (correct) {
    button.style.backgroundColor = "green";
    feedback.innerText = "✅ Correct!";
    score++;
  } else {
    button.style.backgroundColor = "red";
    feedback.innerText = "❌ Wrong!";
  }

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionEl.innerText = `🎉 Quiz Complete!`;
  scoreDisplay.innerText = `${userName}, your final score is ${score} out of ${questions.length}.`;
  nextButton.innerText = "Restart";
  nextButton.style.display = "block";
  nextButton.onclick = () => location.reload();
}
