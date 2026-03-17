pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "anirudhs3110/2023bcs0019"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/AnirudhS3110/devops-jenkins-assignment.git'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Login Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }
    }
}