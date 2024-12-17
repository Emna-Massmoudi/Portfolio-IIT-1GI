function checkAnswers() {
    const correctAnswers = {
        q1: "h1",
        q2: "color",
        q3: "5",
        q4: "letter-spacing",
        q5: "push",
        q6: "img",
        q7: "let",
        q8: "Structure le contenu",
        q9: ".class",
        q10: "HTML, CSS, JavaScript"
    };
    let score = 0;
    let correctAnswersList = [];
    const form = document.getElementById('quizForm');

    for (let i = 1; i <= 10; i++) {
        const questionName = `q${i}`;
        const selectedAnswer = form.elements[questionName];

        
        if (selectedAnswer && selectedAnswer.value === correctAnswers[questionName]) {
            score++;  
            correctAnswersList.push(`${questionName}: ${selectedAnswer.value}`);
        }
    }

   
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    document.getElementById('score').textContent = `Votre score est : ${score} sur 10`;

    
    const correctAnswersListElement = document.getElementById('correctAnswers');
    correctAnswersListElement.innerHTML = '';
    correctAnswersList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        correctAnswersListElement.appendChild(li);
    });
}
