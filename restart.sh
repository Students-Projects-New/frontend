#! /bin/bash

# Restart the docker students-projects
sudo docker restart $(docker ps -a | grep "students-project" | awk '{print $1}')
