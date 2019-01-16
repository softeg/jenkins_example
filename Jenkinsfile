pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:10'
    }
  }

  environment {
        // we will be recording test results and video on Cypress dashboard
        // to record we need to set an environment variable
        // we can load the record key variable from credentials store
        // see https://jenkins.io/doc/book/using/using-credentials/
        CYPRESS_RECORD_KEY = credentials('cypress-example-kitchensink-record-key')
        // because parallel steps share the workspace they might race to delete
        // screenshots and videos folders. Tell Cypress not to delete these folders
        CYPRESS_trashAssetsBeforeRuns = 'false'
  }

  stages {
    stage('checkout') {
        steps {
            git 'https://github.com/softeg/jenkins_example.git'
        }
    }
    // first stage installs node dependencies and Cypress binary
    stage('build') {
      steps {
        // there a few default environment variables on Jenkins
        // on local Jenkins machine (assuming port 8080) see
        // http://localhost:8080/pipeline-syntax/globals#env
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh 'npm ci'
        //sh 'npm run cy:verify'
        echo "Running build ${env.BUILD_ID}"
        sh "ls -al"
        sh "ls -al node_modules/.bin"
        sh "./node_modules/.bin/cypress run --spec 'cypress/integration/santefr/home.spec.js' --record"
      }
    }
  }

  post {
    // shutdown the server running in the background
    always {
      echo 'Stopping local server'
    }
  }
}
