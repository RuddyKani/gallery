pipeline {
    agent any
    environment {

        EMAIL_BODY =

        """

            <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER}\'</b></p>

            <p>

            View console output at

            "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"

            </p>

            <p><i>(Build log is attached.)</i></p>

        """

        EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'"

        EMAIL_SUBJECT_FAILURE = "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'"

        EMAIL_RECEPIENT = 'ruddykani@gmail.com'


    }
    tools {
      nodejs "NodeJS"
    }
    stages {
        stage('clone repository') {
          steps {
            git 'https://https://github.com/RuddyKani/gallery'
          }
        }
        stage('Build project') {
            steps {
                sh 'npm install'
                sh 'node server.js'
            }
        }
        stage('Tests') {
          steps {
            echo 'test'
          }
        }
        stage('Deploy to Heroku') {
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/young-fortress-73746.git master'
                    }
            }
        }
    }
    post {
        success {
            emailext attachLog: true,
                body: EMAIL_BODY,

                subject: EMAIL_SUBJECT_SUCCESS,

                to: EMAIL_RECEPIENT
        }

        failure {
            emailext attachLog: true,
                body: EMAIL_BODY,

                subject: EMAIL_SUBJECT_FAILURE,

                to: EMAIL_RECEPIENT
        }
    }
}
