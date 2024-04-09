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
                branch 'master'  // Deploy only on 'master' branch
            }
            steps {
                // This is where you would typically deploy the application
                // For example, deploying to a server or platform like Render
                echo 'Deploying to production...'
                // Replace this echo with your deployment steps
                // Example deployment to Render:
                // sh 'render deploy --branch master'
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
