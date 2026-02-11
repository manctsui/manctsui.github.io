function checkAnswer(button) {
            const container = button.parentElement;
            const input = container.querySelector("input");
            const feedback = container.querySelector(".feedback");
            const correct = input.dataset.answer.toLowerCase();
            // console.log(input.dataset.answer);

            if (input.value === "") {
                feedback.textContent = "⚠️ Enter an answer first.";
                feedback.className = "feedback incorrect";
                return;
            }

            if (input.value.toLowerCase() === correct) {
                feedback.textContent = "✅ Correct!";
                feedback.className = "feedback correct";
            } else {
                feedback.textContent = "❌ Incorrect. Try again.";
                feedback.className = "feedback incorrect";
            }
        }

        function solution(button) {
            const container = button.parentElement;
            const x = container.querySelector(".solution");
            if (x.style.display === "none" || x.style.display === "") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        } 

        function checkAnswerMC(button) {
            const container = button.parentElement;
            const selected = container.querySelector('input[name="answer"]:checked');
            const feedback = container.querySelector(".feedback");

            if (!selected) {
                feedback.textContent = "⚠️ Select an answer first.";
                feedback.className = "feedback incorrect";
                return;
            }
            
            if (selected.className === "correctMC") {
                feedback.textContent = "✅ Correct!";
                feedback.className = "feedback correct";
            } else {
                feedback.textContent = "❌ Incorrect. Try again.";
                feedback.className = "feedback incorrect";
            }
        }