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

    // Récupérer toutes les réponses de l'utilisateur
    const form = document.getElementById('quizForm');
    const answers = form.querySelectorAll('input[type="radio"]:checked');

    // Vérification des réponses
    answers.forEach(answer => {
        const question = answer.name;
        const userAnswer = answer.value;

        if (correctAnswers[question] === userAnswer) {
            score++;  // Si la réponse est correcte, incrémenter le score
            correctAnswersList.push(`${question}: ${userAnswer}`);  // Ajouter la bonne réponse à la liste
        }
    });

    // Affichage des résultats
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    document.getElementById('score').textContent = `Votre score est : ${score} sur 10`;  // Afficher la note

    // Affichage des réponses correctes
    const correctAnswersListElement = document.getElementById('correctAnswers');
    correctAnswersListElement.innerHTML = '';  // Vider la liste avant de la remplir
    correctAnswersList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;  // Ajouter chaque réponse correcte dans la liste
        correctAnswersListElement.appendChild(li);
    });
}
