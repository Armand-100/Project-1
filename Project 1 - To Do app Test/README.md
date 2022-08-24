[![Udemy Cypress Course - React Todo App ](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/jcsid9&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/jcsid9/runs)

### Instructions to run the code locally

-   Clone the app into your machine.
-   Download json-server package globaly using `npm install -g json-server`.
-   Go to the directory of the app in the command line.
-   install all the dependences using `npm install`
-   Run the backend using `npm run start:server `
-   The server will be up and running on port 8080.
-   keep the server running and open another window from the terminal.
-   navigate to the directory of the app in the command line.
-   Start the front end using `npm run start:frontend`.
-   The app will be opened in your browser http://localhost:3000/
-   Use `npx cypress open` to launch (open) cypress
-   Use `npx cypress run` to run test with command line
-   Use `npx cypress run --spec "file path"` to run a specific test
-   Use `npx cypress run --browser chrome/firefox` to run a test in a specific browser 
                        (use --headless after naming the browser to not open the browser)
