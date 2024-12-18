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
    let score = 0;// suivre le nombre de réponses correctes de l'utilisateur.
    let correctAnswersList = [];//Un tableau vide pour stocker les réponses correctes

    // Récupérer les réponses de l'utilisateur par name
    const form = document.getElementById('quizForm');

    // Parcourir chaque question
    for (let i = 1; i <= 10; i++) {
        const questionName = `q${i}`;
        const selectedAnswer = form.elements[questionName];

        // Vérifier la réponse sélectionnée
        if (selectedAnswer && selectedAnswer.value === correctAnswers[questionName]) {
            score++;  // Si la réponse est correcte, incrémenter le score
            correctAnswersList.push(`${questionName}: ${selectedAnswer.value}`);
        }
    }

    // Affichage des résultats
    const result = document.getElementById('result');
    result.style.display = 'block';
    document.getElementById('score').textContent = `Votre score est : ${score} sur 10`;

    // Affichage des réponses correctes
    const correctAnswersListElement = document.getElementById('correctAnswers');
    correctAnswersListElement.innerHTML = '';
    correctAnswersList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        correctAnswersListElement.appendChild(li);
    });
}
