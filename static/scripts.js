// Define an array of questions with multiple choices
const questions = [
  {
    question: "What does the acronym 'VPN' stand for in cybersecurity?",
    options: [
      "A. Virtual Private Network",
      "B. Very Private Network",
      "C. Virtual Public Network",
      "D. Variable Private Network"
    ],
    answer: "A. Virtual Private Network"
  },
  {
    question: "Which of the following is considered a strong password policy?",
    options: [
      "A. Passwords should be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.",
      "B. Passwords should be exactly 6 characters long.",
      "C. Passwords can be any length and include only letters.",
      "D. Passwords should be shared among users for convenience."
    ],
    answer: "A. Passwords should be at least 8 characters long and include uppercase, lowercase, numbers, and special characters."
  },
  {
    question: "What is phishing in the context of cybersecurity?",
    options: [
      "A. The practice of sending fraudulent emails to obtain sensitive information.",
      "B. The act of scanning network ports for vulnerabilities.",
      "C. A type of software that encrypts data.",
      "D. A method for securely deleting files."
    ],
    answer: "A. The practice of sending fraudulent emails to obtain sensitive information."
  },
  {
    question: "Which tool is commonly used to test network security by simulating attacks?",
    options: [
      "A. Nmap",
      "B. Wireshark",
      "C. Metasploit",
      "D. Nessus"
    ],
    answer: "C. Metasploit"
  },
  {
    question: "What is a firewall?",
    options: [
      "A. A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
      "B. A type of antivirus software.",
      "C. A password management tool.",
      "D. A hardware device that increases internet speed."
    ],
    answer: "A. A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules."
  },
  {
    question: "What does '2FA' stand for in cybersecurity?",
    options: [
      "A. Two-Factor Authentication",
      "B. Two-Factor Authorization",
      "C. Two-Factor Access",
      "D. Two-Factor Agreement"
    ],
    answer: "A. Two-Factor Authentication"
  },
  {
    question: "What is a DDoS attack?",
    options: [
      "A. Distributed Denial of Service attack",
      "B. Direct Denial of Service attack",
      "C. Distributed Data Overload attack",
      "D. Direct Data Overload attack"
    ],
    answer: "A. Distributed Denial of Service attack"
  },
  {
    question: "Which of the following is a common indicator of a cybersecurity breach?",
    options: [
      "A. Unusual network traffic patterns",
      "B. Regular software updates",
      "C. Properly functioning antivirus software",
      "D. Enhanced encryption algorithms"
    ],
    answer: "A. Unusual network traffic patterns"
  },
  {
    question: "What is the purpose of encryption?",
    options: [
      "A. To protect data by converting it into a format that is unreadable without the correct decryption key.",
      "B. To speed up network connections.",
      "C. To increase the size of files.",
      "D. To facilitate easier data access."
    ],
    answer: "A. To protect data by converting it into a format that is unreadable without the correct decryption key."
  },
  {
    question: "What is the main goal of a penetration test?",
    options: [
      "A. To identify and exploit vulnerabilities in a system to improve security.",
      "B. To remove unnecessary files from a computer.",
      "C. To monitor network traffic.",
      "D. To create a backup of all system data."
    ],
    answer: "A. To identify and exploit vulnerabilities in a system to improve security."
  },
  {
    question: "What is ransomware?",
    options: [
      "A. Malicious software that encrypts a user's data and demands a ransom to restore access.",
      "B. Software that helps to manage passwords.",
      "C. A tool for network traffic analysis.",
      "D. An antivirus program."
    ],
    answer: "A. Malicious software that encrypts a user's data and demands a ransom to restore access."
  },
  {
    question: "What is social engineering in cybersecurity?",
    options: [
      "A. Manipulating people into divulging confidential information.",
      "B. Engineering software to improve security.",
      "C. A technique for encoding data.",
      "D. A method for patching software vulnerabilities."
    ],
    answer: "A. Manipulating people into divulging confidential information."
  },
  {
    question: "What does the acronym 'IDS' stand for?",
    options: [
      "A. Intrusion Detection System",
      "B. Internal Defense System",
      "C. Internet Defense Service",
      "D. Intrusion Defense Service"
    ],
    answer: "A. Intrusion Detection System"
  },
  {
    question: "What is a VPN used for?",
    options: [
      "A. To securely connect to a remote network over the internet.",
      "B. To scan for malware on a device.",
      "C. To manage passwords.",
      "D. To increase download speeds."
    ],
    answer: "A. To securely connect to a remote network over the internet."
  },
  {
    question: "What is an exploit?",
    options: [
      "A. A piece of software that takes advantage of a vulnerability in a system.",
      "B. A method for encrypting data.",
      "C. A technique for preventing unauthorized access.",
      "D. A tool for monitoring network traffic."
    ],
    answer: "A. A piece of software that takes advantage of a vulnerability in a system."
  },
  {
    question: "What does 'HTTPS' stand for?",
    options: [
      "A. HyperText Transfer Protocol Secure",
      "B. HyperText Transfer Protocol System",
      "C. HyperText Transfer Procedure Secure",
      "D. HyperText Transfer Process System"
    ],
    answer: "A. HyperText Transfer Protocol Secure"
  },
  {
    question: "What is a zero-day vulnerability?",
    options: [
      "A. A security flaw that is unknown to the software vendor and has no patch available.",
      "B. A vulnerability that occurs after a software update.",
      "C. A flaw that has been known for many years and is regularly patched.",
      "D. A vulnerability that only affects outdated systems."
    ],
    answer: "A. A security flaw that is unknown to the software vendor and has no patch available."
  },
  {
    question: "What is an insider threat?",
    options: [
      "A. A threat originating from within an organization, often by a trusted individual.",
      "B. A type of external malware attack.",
      "C. An attack from a remote hacker.",
      "D. A threat from a physical security breach."
    ],
    answer: "A. A threat originating from within an organization, often by a trusted individual."
  },
  {
    question: "What is multifactor authentication (MFA)?",
    options: [
      "A. A security system that requires two or more distinct forms of identification.",
      "B. A method for scanning network vulnerabilities.",
      "C. A single password used for multiple accounts.",
      "D. A tool for monitoring user activity."
    ],
    answer: "A. A security system that requires two or more distinct forms of identification."
  },
  {
    question: "What is a digital certificate?",
    options: [
      "A. An electronic document used to prove the ownership of a public key.",
      "B. A physical card used to access secure locations.",
      "C. A type of antivirus software.",
      "D. A tool for creating strong passwords."
    ],
    answer: "A. An electronic document used to prove the ownership of a public key."
  },
  {
    question: "What does the acronym 'MALWARE' stand for?",
    options: [
      "A. Malicious Software designed to harm or exploit systems.",
      "B. Malware Application Layer Encryption",
      "C. Malware Access Layer Entry",
      "D. Malicious Applications Leveraging Active Response Environment"
    ],
    answer: "A. Malicious Software designed to harm or exploit systems."
  },
  {
    question: "What is the primary purpose of a vulnerability scanner?",
    options: [
      "A. To identify and assess security weaknesses in a system.",
      "B. To enhance network speed.",
      "C. To perform regular software updates.",
      "D. To manage user permissions."
    ],
    answer: "A. To identify and assess security weaknesses in a system."
  },
  {
    question: "What is a honeypot in cybersecurity?",
    options: [
      "A. A decoy system designed to attract and analyze attackers.",
      "B. A tool for encrypting data.",
      "C. A security feature for managing user access.",
      "D. A type of firewall."
    ],
    answer: "A. A decoy system designed to attract and analyze attackers."
  },
  {
    question: "What is an SQL injection attack?",
    options: [
      "A. An attack that exploits vulnerabilities in a web application's database query execution.",
      "B. An attack that floods a network with excessive traffic.",
      "C. A type of phishing attack.",
      "D. A method of brute force password cracking."
    ],
    answer: "A. An attack that exploits vulnerabilities in a web application's database query execution."
  }
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
    setTimeout(displayRandomQuestion, 10); // Wait 1 second before displaying the next question
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
            <li>Cyberterrorism: This threat is a politically-based attack on computers and information technology to cause harm and create widespread social disruption.</li>
            <li>Malware: This threat encompasses ransomware, spyware, viruses, and worms. It can install harmful software, block access to your computer resources, disrupt the system, or covertly transmit information from your data storage.</li>
            <li>Trojans: Like the legendary Trojan Horse of mythology, this attack tricks users into thinking they're opening a harmless file. Instead, once the trojan is in place, it attacks the system, typically establishing a backdoor that allows access to cybercriminals.</li>
            <li>Botnets: This especially hideous attack involves large-scale cyberattacks conducted by remotely controlled malware-infected devices. Think of it as a string of computers under the control of one coordinating cybercriminal. What’s worse, compromised computers become part of the botnet system.</li>
            
        </ul>
    `;
});
