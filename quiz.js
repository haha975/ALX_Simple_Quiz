// 1. Define the function to check the user's answer
function checkAnswer() {
    // 2. Set the correct answer
    const correctAnswer = "4";

    // 3. Get the selected radio button (user's answer)
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // 4. Check if any option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return; // Stop the function here if nothing is selected
    }

    // 5. Store the selected value
    const userAnswer = selectedOption.value;

    // 6. Compare user's answer to correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "✅ Correct! Well done.";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = "❌ That's incorrect. Try again!";
        document.getElementById("feedback").style.color = "red";
    }
}

// 7. Add event listener to the submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer); // No () after checkAnswer

