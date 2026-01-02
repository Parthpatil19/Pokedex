# A Pokedex 

A full-stack **Pokedex** web application that allows users to search, explore, and view detailed information about Pokémon.  
The project is built using **Spring Boot** for the backend and **React (Vite)** for the frontend, following clean architecture and RESTful principles.

---

##  Features

-  Search Pokémon by name
-  View random Pokémon cards
-  Detailed Pokémon information:
  - Type
  - Abilities
  - Stats
  - Images
-  Recent search & recommendations
-  Fast and responsive UI
-  REST API integration
-  Modular and scalable architecture

---
Screenshots -
<img width="1152" height="912" alt="Screenshot 2026-01-01 080700" src="https://github.com/user-attachments/assets/caf65813-2e1e-41c8-8cc2-b3c41a0b0b66" /> <br> <hr>
<img width="694" height="869" alt="Screenshot 2026-01-01 080748" src="https://github.com/user-attachments/assets/b312a5bf-1ea3-4563-a983-7e6b1d135dbc" />
---
## 🚀 Steps to Run the Project

### 1️⃣ Prerequisites
Ensure the following are installed:
- Java JDK 21+
- Maven
- Node.js (v16+) and npm
- Git
- VS Code

---

### 2️⃣ Clone the Repository
```
git clone (https://github.com/Parthpatil19)


3️⃣ Run the Backend (Spring Boot)
Navigate to the backend directory

Open the project in IntelliJ / Eclipse / VS Code

Update application.properties if required (port, DB, API config)

Start the backend:

bash
Copy code
mvn spring-boot:run
OR run the main Spring Boot application class

Backend will run at:

arduino
Copy code
http://localhost:9090
4️⃣ Run the Frontend
Navigate to the frontend directory

Open it in VS Code

Install dependencies:

npm install

Start the frontend:

npm run dev

npm start

Frontend will be available at:

http://localhost:5173

5️⃣ Connect Frontend with Backend
Ensure the backend is running before starting the frontend.

Update the API base URL if needed:

const API_URL = "http://localhost:9090/api";

6️⃣ Access the Application
Open the frontend URL in a browser

Use the application features

APIs can be tested using Postman if required

7️⃣ Stop the Application
Press Ctrl + C in both backend and frontend terminals


🛠️ Tech Stack
Backend: Java, Spring Boot, REST APIs

Frontend: React / JavaScript, HTML, CSS

Tools: Maven, npm, Git, VS Code


