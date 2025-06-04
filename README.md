# Hacker News Api Tests
Automated tests for the Hacker news api tests
1. Retrieving top stories with the Top Stories API
2. Using the Top Stories API to retrieve the current top story from the Items API
3. Using the Top Stories API to retrieve a top story, retrieve its first comment using the Items API

## Prerqusite
- In order to run test you need to install [node](https://nodejs.org/en/download/)
- In order to run tests in containers the [Dockers](https://docs.docker.com/get-docker/) should be installed and running in the system

## Run Tests In Local System Terminal
- Clone the project in local system
```bash
https://github.com/aleeazeem/hackernews-api-test.git
```
- Install all required dependencies 
```bash
npm install
```
- Run tests using command
```bash
npm test
```
```bash
npx jest
```
- If you want to print logs during execution then run the command with arguments DEBUG=true
```bash
DEBUG=true npm test  
```
```bash
DEBUG=true npx jest
```

## Run Tests In Docker
If you want to run tests in dockers then installation of node is not required becuase dockerfile is using node 18 image as a base. 
Only thing you need to install [Dockers](https://docs.docker.com/get-docker/) and before starting it make sure docker is up and running.

The whole code is written in [Dockerfile](Dockerfile) for execution. 
- Build an Image
```bash
docker build -t hackernews-api-test .
```
- Run container with created docker image
```bash
docker run --rm hackernews-api-test
```
- Run the container with logs 
```bash
docker run --rm -e DEBUG=true hackernews-api-test
```
