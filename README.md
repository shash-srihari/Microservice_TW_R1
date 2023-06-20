Microservice API


This is a simple microservice API implemented in Node.js and Typescript using NestJS framework. 
The API interacts with a MongoDB database. It provides endpoints to manage companies and teams.

Requirements

Node.js
MongoDB
Postman (to test the API)
Docker (optional, for containerization)


Installation

Clone the repository:
git clone https://github.com/shash-srihari/Microservice_TW_R1.git


cd your-repo
npm install


Set up the environment variables:

Create a .env file in the root directory.
Add the following environment variables and provide appropriate values:

PORT=3001
MONGODB_URI=mongodb://localhost:27017/microservice-db
JWT_SECRET=ShashankSrihariTechwondoe


Usage

Start the application:

npm run build
npm run start

NOTE: If the project is re-run, the command "rm -rf build" needs to be run before executing the build and start commands again.

The API will be available at http://localhost:3001.


Please find the Postman API Collection in the github repo.

NOTE:
The login API(/auth/login) in the collection, needs to be run first to generate the jwt token that needs to be set manually for every other end point.
The Authorization header needs to be set to (Bearer 'token') for the end point. Currently, the expiry of the token has been set to 1 Hour, so that for the purpose of this project, it does not need to be changed time and again.


Authentication
API endpoints are protected by JWT token-based authentication. To access the APIs, include a valid JWT token in the Authorization header of the requests.

Two API endpoints were requested, but unfortunately due to the lack of time, I was only able to create one API endpoint with both read/write scopes. Given more time, I am confident that I can get this done for a single scope as well.

The Auth0 (Client Credentials grant type) implementation has not been done on this microservice. I have experience working with implicit and resource owner password credentials in Spring Boot microservices, and hence need a little extra time if the Auth0 needs to be implemented in this project.


Docker
To run the API in a Docker container, follow these steps:

Build the Docker image:

docker build -t image-name .


Run the Docker container:

docker run -p 3001:3001 -d image-name

The API will be available at http://localhost:3001
