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
git clone https://github.com/aleeazeem/Weather-Test.git <project>
```
- Install all required dependencies 
```bash
npm install
```
- Run tests using command
```bash
npm run test
```
OR
```bash
npx jest
```
- If you want to print logs during execution then run the command with arguments DEBUG=true
```bash
DEBUG=true npm run jest   
```
OR
```bash
DEBUG=true npx jest
```

## Run Tests In Docker
If you want to run tests in dockers then you don't need to install node. Only thing you need to install 
[Dockers](https://docs.docker.com/get-docker/) and before starting it make sure docker is up and running. 
The whole code is written in [Dockerfile](Dockerfile) for execution. 
- Build an Image
```bash
docker build -t weather-test-image --build-arg .
```

- Run container with with name space weather-test-container.
```bash
docker run --shm-size 2G --name weather-test-container weather-test-image
```
- Optional: if you want to export app_id then run container with env varaible of app_id
```bash
docker run --shm-size 2G -e app_id_token=${app_id} -name weather-test-container weather-test-image
```
