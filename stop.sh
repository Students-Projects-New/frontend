#! /bin/bash

# Stop the docker students-projects
sudo docker stop $(docker ps -a | grep "students-project" | awk '{print $1}')
