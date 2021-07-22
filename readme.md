This website is hosted at : https://master.dx0m05ulfbl2l.amplifyapp.com/

Users can login with Google and create Tests with Questions and Answers.

TECHNICAL CONCEPTS:
Javascript Framework :
React with Hooks.
React Router.
Web Workers - for logging service so that app does become slow.
Service Workers - Targetting a progressive web app.

Styling Concept : CSS Modules.

------------------- Technical Details.----------------------
FRONT END

1. How to get the client id from google ?
   1a . Login in to Google cloud console.
   1b . APIs and Services / Credentials
   1c . Create a OAuth ClientID - User gives concent so the app can access the users data
   1d . By giving a name and application type : give the application key
   1e . The clientId and clientSecret are always accessible on the screen : APIs and Services / Credentials

   1f . Dont forget to give the re-direct uri : else the google button wont work completely.

------------------- Technical Details ---- BACK END----------------------

1. API Gateway
   1.1 Create api
2. AWS Lambda

3. Using vs code extension : AWs Toolkit for writing AWS Lambda locally.
   3.1 Install the extension AWS Toolkit locally.
   3.2 Install docker for Windows + WSL also. This will have automatic file sharing.
   3.3 Install AWS SAM cli for Windows
   3.4 CTRL + SHIFT + P : to open the command pallet
   3.5 Create a new AWS SAM Lambda application
   3.6 Select the /function name / nodejs version / local src repository.
   3.6 Open the local src repository in vs code.
   3.7 DEBUGGING : After editing the index.js file, hit f5 : This will invoke your function.
   3.8 You will be asked for a configuration.
   3.9 Select the predefined 'aws lambda direct invocation'.
   3.10 Note that you would need the AWS CLI to run the aws configure which will be used by SAM.
   3.11 Outside your project there will be a gitignore and template.yaml file.
   3.12 Run the command : sam deploy --guided
   3.13 This will need the template.yaml file
   3.14 Alternate way to create an app : Right click on the aws explorer/lambda and create a new app.
   3.15 Use the option : Create lambda sam application - will be asked few question
   3.16 Make changes and again right click on the lambda in aws explorer and say Deploy Sam Application.
   3.17 right click to invoke and see th o/p below.
