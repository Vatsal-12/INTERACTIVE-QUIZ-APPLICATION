# INTERACTIVE-QUIZ-APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: VATSAL GUPTA

*INTERN ID*: CT06DF1500

*DOMAIN*: FRONT END WEB DEVELOPMENT

*DURATION*: 6 WEEKS

*MENTOR*: NEELA SANTOSH

---

An interactive, timed quiz web application built using **JavaScript**, **HTML**, and **CSS**, which dynamically fetches quiz questions from a public API. Users can enter their name and age, select a quiz topic of interest, read instructions, and then take a 5-question quiz with a timer of 1 minute per question. Feedback is provided instantly, and the final score is shown with the user’s name.

---

## 📋 Features

- 🧑‍💻 **User Input**: Collects user’s name and age before starting the quiz.
- 📚 **Topic Selection**: Users can choose a quiz category such as General Knowledge, Science, History, etc.
- ℹ️ **Instructions Page**: Clear guidelines before beginning the quiz.
- ⏱️ **Per-Question Timer**: 60 seconds per question to increase challenge.
- 🤖 **Dynamic Questions via API**: Questions are loaded in real-time from the Open Trivia Database.
- 🟢 🔴 **Instant Feedback**: Indicates right or wrong answers immediately.
- 🏁 **Score Display**: Shows total score and user name at the end.
- 🌙 **Dark Mode UI**: Clean, modern, and visually comfortable color scheme.

---

## 🛠️ Tools & Technologies Used

| Tool/Tech | Purpose |
|----------|---------|
| **HTML5** | Markup structure for web content |
| **CSS3**  | Styling and layout with a custom dark theme |
| **JavaScript** | Logic for handling quiz flow, timers, and API interaction |
| **Open Trivia DB API** | Source of real-time quiz questions |
| **DOM Manipulation** | Dynamically rendering questions and responses |
| **setInterval()** | For implementing countdown timer logic |
| **Event Handling** | For user interactions like answering questions and navigating quiz |

---

## 🚀 How It Works

1. **Landing Page**: Users input their name, age, and choose a quiz topic from a dropdown.
2. **Instructions Screen**: Users are shown the rules of the quiz and can press "Start Quiz" to proceed.
3. **Quiz Mode**:
   - The app fetches 5 multiple-choice questions from the selected category using the Open Trivia Database API.
   - Each question comes with four randomized options.
   - A 60-second timer starts for each question.
   - The user selects one option and receives instant feedback.
4. **Scoring**:
   - A correct answer earns 1 point.
   - No negative marking for wrong answers or skipped questions.
5. **Final Score Display**:
   - Once the quiz ends, the app displays a personalized message with the total score and the user’s name.
   - Option to restart the quiz is provided.

---

## 🌐 API Used

**Open Trivia DB (https://opentdb.com/api_config.php)**  
A free-to-use API that offers trivia questions categorized by topic and difficulty. This application dynamically builds the quiz using this API.

---


## 📝 Future Enhancements (Optional Ideas)

- Add difficulty level selection (Easy/Medium/Hard)
- Support for more question types (True/False)
- Store high scores using local storage or database
- Mobile responsiveness
- Audio feedback or animations

---

https://github.com/user-attachments/assets/e82a61e6-3153-4159-8665-c201d5f07131

