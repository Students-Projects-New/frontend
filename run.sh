#! /bin/bash

# docker build images students-projects
sudo docker build -t students-projects .

# docker run container port 3000
sudo docker run --name students-project -dp 3000:80 students-projects
