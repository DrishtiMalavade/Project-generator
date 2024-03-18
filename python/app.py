import random

print("\nrandom project generator\n")

projects = {
    "To-Do List Application": "Create a program that allows users to add, delete, and manage tasks or to-do items.",
    "Weather App": "Develop an application that fetches weather data from an API and displays it to the user.",
    "Calculator": "Build a basic calculator application that performs arithmetic operations.",
    "Note-Taking App": "Create a program where users can create, edit, and delete notes.",
    "Expense Tracker": "Develop an application to help users track their expenses and analyze their spending habits.",
    "Quiz App": "Build a quiz application where users can answer questions on various topics and receive feedback on their performance.",
    "Recipe Manager": "Create a program that allows users to store, organize, and search for recipes.",
    "Tic-Tac-Toe Game": "Implement the classic Tic-Tac-Toe game that can be played against the computer or another player.",
    "Chat Application": "Develop a simple messaging application where users can send and receive messages in real-time.",
    "Budget Planner": "Build an application that helps users plan and manage their budget by tracking income, expenses, and savings goals."
}

random_project = random.choice(list(projects.keys()))
description = projects[random_project]

print(random_project)
user_input = input("would you like the description?\n")

if user_input == "yes":
    print(description)

print("\nHappy coding!\n")








