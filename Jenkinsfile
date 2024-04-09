pipeline {
    agent any

    stages {

        stage('Build Frontend') {
            steps {
                // Install dependencies and build frontend
                dir('Frontend') {
                    sh 'npm install'
                    sh 'npm audit fix'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                // Install dependencies and build backend
                dir('Backend') {
                    sh 'npm install'
                    sh 'npm audit fix'
                    sh 'npm start'
                }
            }
        }

        stage('Test') {
            steps {
                // Run tests for frontend and backend
                dir('Frontend') {
                    sh 'npm test'
                }
                dir('Backend') {
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
