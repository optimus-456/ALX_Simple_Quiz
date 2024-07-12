function checkAnswer() {
  // Correct answer
  const correctAnswer = "4";

  // Retrieve the user's answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  let userAnswer;

  // Check if an option is selected
  if (selectedOption) {
    userAnswer = selectedOption.value;
  } else {
    userAnswer = null;
  }

  // Get the feedback element
  const feedback = document.getElementById("feedback");

  // Compare the user's answer with the correct answer
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
