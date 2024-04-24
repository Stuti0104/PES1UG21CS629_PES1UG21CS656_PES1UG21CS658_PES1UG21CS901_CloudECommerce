pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // sh 'copy.bat'
                sh 'docker build -t uc1 ./uc1'
                sh 'docker tag uc1 stuti01/uc1-deploy:latest'
                sh 'docker push stuti01/uc1-deploy:latest'
                sh 'docker build -t uc2 ./uc2'
                sh 'docker tag uc2 stuti01/uc2-deploy:latest'
                sh 'docker push stuti01/uc2-deploy:latest'
                sh 'docker build -t uc3 ./uc3'
                sh 'docker tag uc3 stuti01/uc3-deploy:latest'
                sh 'docker push stuti01/uc3-deploy:latest'
                sh 'docker build -t frontend ./frontend'
                sh 'docker tag frontend stuti01/frontend-deploy:latest'
                sh 'docker push stuti01/frontend-deploy:latest'
            }
        }
        
        stage('Deploy') {
            steps {
                 sh 'kubectl apply -f kubernetes.yml'
            }
        }
    }
    
    post {
        failure {
            echo 'Pipeline failed'
        }
    }
}
