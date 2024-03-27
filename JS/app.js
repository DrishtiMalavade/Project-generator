const projects = {
    "To-Do List Application": "Create a program that allows users to add, delete, and manage tasks or to-do items.",
    "Weather App": "Develop an application that fetches weather data from an API and displays it to the user.",
    "Calculator": "Build a basic calculator application that performs arithmetic operations.",
    "Note-Taking App": "Create a program where users can create, edit, and delete notes.",
    "Expense Tracker": "Develop an application to help users track their expenses and analyze their spending habits.",
    "Quiz App": "Build a quiz application where users can answer questions on various topics and receive feedback on their performance.",
    "Recipe Manager": "Create a program that allows users to store, organize, and search for recipes.",
    "Tic-Tac-Toe Game": "Implement the classic Tic-Tac-Toe game that can be played against the computer or another player.",
    "Chat Application": "Develop a simple messaging application where users can send and receive messages in real-time.",
    "Budget Planner": "Build an application that helps users plan and manage their budget by tracking income, expenses, and savings goals.",
    "E-commerce Website": "Develop a full-fledged e-commerce platform with user authentication, product listings, and a shopping cart.",
    "Blog Platform": "Create a blogging platform where users can write, publish, and manage their blog posts.",
    "Fitness Tracker": "Develop an application to help users track their fitness activities, set goals, and monitor progress.",
    "Social Media Dashboard": "Build a dashboard that aggregates data from various social media platforms and displays analytics.",
    "Music Streaming App": "Create a music streaming application with features like playlists, search, and user profiles.",
    "Language Learning App": "Develop an app to help users learn a new language with interactive lessons, quizzes, and progress tracking.",
    "Job Search Portal": "Build a platform where users can search for jobs, submit applications, and track their job search progress.",
    "Virtual Event Platform": "Develop a platform for hosting virtual events, webinars, and conferences with interactive features.",
    "Online Course Platform": "Create an online learning platform with courses, lectures, quizzes, and certificates.",
    "Recipe Sharing App": "Develop an app where users can share their favorite recipes, rate recipes, and comment on others' recipes.",
    "Pet Care App": "Build an application to help users manage their pet's health records, set reminders, and find pet-related services."
};


function generateProject() {
    const randomProject = getRandomProject();
    document.getElementById('randomProject').innerText = randomProject;
    document.getElementById('description').innerText = '';
}

function getRandomProject() {
    const keys = Object.keys(projects);
    return keys[Math.floor(Math.random() * keys.length)];
}

function showDescription() {
    const randomProject = document.getElementById('randomProject').innerText;
    document.getElementById('description').innerText = projects[randomProject];
}
 
