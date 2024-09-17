<!-- Libraries to install -->
* Lodash -- npm install lodash -> npm intall @types/lodash -D 
* uuid -- npm intall uuid -> npm install @types/uuid -D


* About C4 Diagram, its very important to design the main objective regarding the project.

* Link: https://github.com/argentinaluiz/ambiente-dev-produtivo


## Steps to configure the project:
- Configure the docker file: Dockerfile
- Create a docker-compose.yaml file
- create the folder:  .docker/start.sh
- take permission to execute the command within the folder .docker/start.sh: `chmod +x .docker/start.sh`
- run `docker compose up`
- its mandatory to execute all comands within the container by: open an new terminal e executing the command: `docker compose exec app bash`

## Configuration of npm and typescript:
- Execute `npm init` to create the node project.
- Add the necessary libraries.
- Execute command: `npx tsc --init` to initialize typescript.

## libraries:
- class-validator


## Configurations regarding the libraries:
*  When we are using the class-validato and using the validators decorators, is mandatory to configure the decorator validator in tsconfig.json.
*  After added `@Decorators` its necessary to create the `.swcrc` file to configure to accpet decorators.
