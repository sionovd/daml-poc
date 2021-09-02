# Deployment on top of Canton

Deploying the system on top of canton involves opening a bunch of separate terminals because running it in the background is currently not viable. Therefore, it is recommended to use `tmux` for this task. 

## Database setup

1. `docker-compose -f docker/stack.yaml up -d`
2. `docker-compose -f docker/canton.yaml up -d` 

## DAML setup

Create the DAR file:

1. `cd daml-poc`
2. `daml build`
3. `daml codegen js ./.daml/dist/daml-0.1.0.dar -o entrance-permit/daml.js`

## Running the 'local' canton scripts

Run the local canton scripts on each server.

#### Master server:
1. `cd daml-poc/canton/master`
2. `chmod +x run_master_local.sh`
3. `./run_master_local.sh`

#### buildingA server:
1. `cd daml-poc/canton/A`
2. `chmod +x run_a_local.sh`
3. `./run_a_local.sh`

#### buildingC server:
1. `cd daml-poc/canton/C`
2. `chmod +x run_c_local.sh`
3. `./run_c_local.sh`

## Running the 'remote' canton scripts

Next, once the local scripts successfully brought up the canton prompts on each server, run the remote canton script on each server: 

#### Master server
1. `cd daml-poc/canton/master`
2. `chmod +x run_master_remote.sh`
3. `./run_master_remote.sh`

#### buildingA server:
1. `cd daml-poc/canton/A`
2. `chmod +x run_a_remote.sh`
3. `./run_a_remote.sh`

#### buildingC server:
1. `cd daml-poc/canton/C`
2. `chmod +x run_c_remote.sh`
3. `./run_c_remote.sh`

Then, upload the DAR file to the ledger by entering the `uploadDar` command in the master's remote canton prompt. 

## Running the application

First, make sure that the `.env` file is properly configured in each server. 

Then, run the application:

1. `cd entrance-permit`
2. `npm i`
3. `npm start`