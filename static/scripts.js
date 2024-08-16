// Define an array of questions with multiple choices
const questions = [
    // Existing questions ...
    // (Include the initial 10 questions here)
    {
        question: "What does 'CIA' stand for in cybersecurity?",
        options: [
            "A. Central Intelligence Agency",
            "B. Confidentiality, Integrity, Availability",
            "C. Computer Information Agency",
            "D. Cyber Intelligence Analysis"
        ],
        answer: "B. Confidentiality, Integrity, Availability"
    },
    {
        question: "Which of the following is a common type of phishing attack?",
        options: [
            "A. Spear Phishing",
            "B. Watering Hole Attack",
            "C. SQL Injection",
            "D. Man-in-the-Middle Attack"
        ],
        answer: "A. Spear Phishing"
    },
    // Add other existing questions here
    // Expanded questions
    {
        question: "What is the primary purpose of a VPN?",
        options: [
            "A. To hide your IP address",
            "B. To provide antivirus protection",
            "C. To manage passwords",
            "D. To detect malware"
        ],
        answer: "A. To hide your IP address"
    },
    {
        question: "What is the 'Zero Trust' model in cybersecurity?",
        options: [
            "A. A model that trusts all users within the network",
            "B. A model that trusts no one by default and verifies everyone",
            "C. A model that only trusts external connections",
            "D. A model that trusts only high-level executives"
        ],
        answer: "B. A model that trusts no one by default and verifies everyone"
    },
    // Add other expanded questions here
];

let availableQuestions = [...questions]; // Copy of questions array
let currentQuestion = null;

// Function to get a random question
function getRandomQuestion() {
    if (availableQuestions.length === 0) {
        displayEndMessage();
        return null;
    }
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];
    availableQuestions.splice(randomIndex, 1); // Remove the question from the list
    return question;
}

// Function to display a question
function displayQuestion(question) {
    if (!question) return; // If no question, return

    let optionsHtml = '';

    question.options.forEach(option => {
        optionsHtml += `<button class="option-button">${option}</button>`;
    });

    document.getElementById('content').innerHTML = `
        <h2>MCQ Quiz</h2>
        <div id="quiz">
            <p>${question.question}</p>
            <div id="options">
                ${optionsHtml}
            </div>
            <button id="nextBtn" style="display:none;">Next Question</button>
        </div>
    `;

    // Add event listeners to the option buttons
    document.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', () => {
            checkAnswer(button.textContent, question.answer);
        });
    });
}

// Function to display a random quiz question
function displayRandomQuestion() {
    currentQuestion = getRandomQuestion();
    displayQuestion(currentQuestion);
}

// Function to check the selected answer
function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect. The correct answer is: ' + correctAnswer);
    }
    
    // Automatically move to the next question
    setTimeout(displayRandomQuestion, 1000); // Wait 1 second before displaying the next question
}

// Function to display a message when the quiz ends
function displayEndMessage() {
    document.getElementById('content').innerHTML = `
        <h2>Quiz Completed</h2>
        <p>Congratulations! You have completed the quiz. All questions have been answered.</p>
    `;
}

// Function to generate a password
function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Event listener for the "Start Quiz" button
document.getElementById('quizBtn').addEventListener('click', function() {
    availableQuestions = [...questions]; // Reset available questions
    displayRandomQuestion();
});

// Event listener for the password generator button
document.getElementById('passwordGenBtn').addEventListener('click', function() {
    let password = generatePassword();
    document.getElementById('content').innerHTML = `
        <h2>Password Generator</h2>
        <p>Your generated password: <strong>${password}</strong></p>
    `;
});

// Event listener for the information guide button
document.getElementById('infoGuideBtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Information Guide</h2>
        <p>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. Here are some key points:</p>
        <ul>
            <li>Understand common threats such as phishing, malware, and ransomware.</li>
            <li>Use strong, unique passwords for different accounts.</li>
            <li>Keep your software and systems updated.</li>
            <li>Be cautious of suspicious emails and links.</li>
        </ul>
    `;
});
