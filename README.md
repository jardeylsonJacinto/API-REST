![REST](https://github.com/jardeylsonJacinto/API-REST/assets/93053356/0e7b54b8-a18a-4841-bb2c-626af27ce4e9)

# _REST API_

![GitHub repo size](https://img.shields.io/github/repo-size/jardeylsonJacinto/NLW-setup)
![GitHub](https://img.shields.io/github/license/jardeylsonJacinto/NLW-setup)
![jardeylson](https://img.shields.io/static/v1?label=Taught%20by&message=Jardeylson-Jacinto&color=gray&labelColor=8257E5)

## REST API for User and Student Management

### Technologies Used:

- bcryptjs: Library to hash passwords securely.
- dotenv: To load environment variables.
- express: Node.js Framework for building REST APIs.
- jsonwebtoken: For authentication based on JWT tokens (JSON Web Tokens).
- multer: To handle file uploads.
- mysql2: Driver to connect and interact with a MySQL database.
- sequelize: ORM (Object-Relational Mapping) to simplify interaction with the MySQL database.

## Project description:

This project is a REST API that aims to manage information about users and students. The API allows the registration, authentication and authorization of users, as well as the registration and consultation of information about students.

## Main Features:

### User Authentication:

- Users can register by providing a username, password and additional information.
- Passwords are stored in the database after being encrypted using the bcryptjs library.
- Users can log in using their credentials, and the API generates a JWT token to authenticate subsequent requests.

### Student Management:

- Students can be registered with information such as name, surname, email, age.
- It is possible to list all registered students and search for information on a specific student by ID.

### Route Authorization:

Some API routes are protected and require authentication. Only authenticated users have access to these routes.
Authorization is verified based on the JWT token.

### Uploading Student Images:

The API allows users to upload images to be associated with student records.
The multer library is used to handle file uploads.

## Project Structure:

The project structure follows RESTful development best practices and is organized into controllers, models and routes:

- Controllers: Contain the business logic for each resource (users and students).
- Models: Define the schemas of objects (tables) in the database using sequelize.
- Routes: Configure HTTP routes and define the corresponding controllers for each route.

## Environment Setting:

Environment variables are configured in the .env file to store sensitive information such as JWT secret and database credentials.

## Dependencies:

Project dependencies are managed by npm or yarn and are listed in the package.json file. You can install them using the npm install or yarn install command.

## _My Contacts_ :mailbox_with_mail:
[![image](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jardeylson-jacinto-769769156)
[![image](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/jardeylsonjacinto/)
[![image](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](jardeylsong.m@gmail.com)
