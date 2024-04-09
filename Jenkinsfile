pipeline {
    agent any

    stages {

        stage('Build Frontend') {
            steps {
                // Install dependencies and build frontend
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                // Install dependencies and build backend
                dir('backend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                // Run tests for frontend and backend
                dir('frontend') {
                    sh 'npm test'
                }
                dir('backend') {
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'main'  // Deploy only on 'master' branch
            }
            steps {

                echo 'Deploying to production...'

            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
