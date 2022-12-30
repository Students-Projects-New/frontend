#! /bin/bash

# Remove the docker students-projects
sudo docker rm --force $(docker ps -a | grep "students-project" | awk '{print $1}')

# Remove the docker image students-projects and nginx
sudo docker rmi $(docker images | grep "students-project" | awk '{print $3}') $(docker images | grep "nginx" | awk '{print $3}')
