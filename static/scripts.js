document.getElementById('quizBtn').addEventListener('click', function() {
    const questions = [
        {
            question: "What is the primary purpose of a firewall?",
            options: [
                "A) To increase network speed",
                "B) To block unauthorized access",
                "C) To provide internet access",
                "D) To store data"
            ],
            answer: "B"
        },
        {
            question: "What does 'phishing' refer to?",
            options: [
                "A) A type of malware",
                "B) A method to access private data via deceptive emails",
                "C) A network security tool",
                "D) A software for data recovery"
            ],
            answer: "B"
        },
        {
            question: "Which of the following is a strong password?",
            options: [
                "A) password123",
                "B) 123456",
                "C) A1b2C3d4E5!",
                "D) qwerty"
            ],
            answer: "C"
        },
        {
            question: "What does HTTPS stand for?",
            options: [
                "A) HyperText Transfer Protocol Secure",
                "B) HyperText Transfer Protocol Service",
                "C) High Transfer Protocol Secure",
                "D) Hypertext Transmission Protocol Secure"
            ],
            answer: "A"
        },
        {
            question: "Which type of attack involves overwhelming a system with traffic?",
            options: [
                "A) Phishing attack",
                "B) DDoS attack",
                "C) SQL injection",
                "D) Man-in-the-middle attack"
            ],
            answer: "B"
        },
        {
            question: "What is the purpose of encryption?",
            options: [
                "A) To compress files",
                "B) To make data unreadable to unauthorized users",
                "C) To increase data storage",
                "D) To improve system performance"
            ],
            answer: "B"
        },
        {
            question: "Which of the following is an example of social engineering?",
            options: [
                "A) Installing malware",
                "B) Phishing emails",
                "C) Exploiting software vulnerabilities",
                "D) Network scanning"
            ],
            answer: "B"
        },
        {
            question: "What is a VPN used for?",
            options: [
                "A) To increase internet speed",
                "B) To hide your IP address and encrypt your internet connection",
                "C) To manage network traffic",
                "D) To recover lost data"
            ],
            answer: "B"
        },
        {
            question: "What does 'malware' stand for?",
            options: [
                "A) Malicious software",
                "B) Management software",
                "C) Mail software",
                "D) Monitoring software"
            ],
            answer: "A"
        },
        {
            question: "Which of the following is a common sign of a phishing attack?",
            options: [
                "A) Personalized greeting",
                "B) Requests for sensitive information",
                "C) A well-known sender",
                "D) Secure website connection"
            ],
            answer: "B"
        }
    ];

    let currentQuestionIndex = 0;

    function displayQuestion() {
        if (currentQuestionIndex >= questions.length) {
            document.getElementById('content').innerHTML = '<h2>Quiz Complete!</h2>';
            return;
        }

        const q = questions[currentQuestionIndex];
        let optionsHtml = q.options.map((option, index) => 
            `<li><input type="radio" name="option" value="${String.fromCharCode(65 + index)}"> ${option}</li>`
        ).join('');

        document.getElementById('content').innerHTML = `
            <h2>MCQ Quiz</h2>
            <p>${q.question}</p>
            <ul>${optionsHtml}</ul>
            <button onclick="nextQuestion()">Next</button>
        `;
    }

    window.nextQuestion = function() {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (!selectedOption) {
            alert('Please select an answer.');
            return;
        }

        const answer = selectedOption.value;
        if (answer === questions[currentQuestionIndex].answer) {
            alert('Correct!');
        } else {
            alert('Incorrect. The correct answer was ' + questions[currentQuestionIndex].answer);
        }

        currentQuestionIndex++;
        displayQuestion();
    };

    displayQuestion();
});

document.getElementById('passwordGenBtn').addEventListener('click', function() {
    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    const password = generatePassword(12); // Generate a 12-character password
    document.getElementById('content').innerHTML = `
        <h2>Password Generator</h2>
        <p>Here is your generated password: <strong>${password}</strong></p>
    `;
});

document.getElementById('infoGuideBtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Information Guide</h2>
        <p>Cybersecurity is essential for protecting your digital assets. Here are some key topics:</p>
        <ul>
            <li><strong>Phishing:</strong> Be cautious of emails and messages that request sensitive information.</li>
            <li><strong>Passwords:</strong> Use strong, unique passwords for different accounts.</li>
            <li><strong>Software Updates:</strong> Regularly update your software to patch security vulnerabilities.</li>
            <li><strong>Two-Factor Authentication:</strong> Enable this feature for an extra layer of security.</li>
        </ul>
    `;
});
