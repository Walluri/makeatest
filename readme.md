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

BACK END.

1. API Gateway
   1a. Create api
2. AWS Lambda
