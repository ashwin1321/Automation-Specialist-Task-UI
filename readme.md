
# Automation Specialist UI Automation Task

This repository contains UI Automation scripts for an expense tracker app using Playwight. It also includes a GitHub Actions CI/CD workflow that automatically runs these Postman tests on every push.

## Installation

### Before running
- Make sure to install Node

### Clone this repository
```bash
git@github.com:ashwin1321/Automation-Specialist-Task-UI.git
```

### Open the file in code editor and install the dependencies
```bash
npm install
```

### Run all the tests
```bash
npm run test
```


## CI/CD workflow
- This repo has github action workflow configured
- On every push workflow runs
- please view the workflow result [here](https://github.com/ashwin1321/Automation-Specialist-Task-UI/actions/runs/16585418553/job/46909540275)
- View the test artifacts here: https://github.com/ashwin1321/Automation-Specialist-Task-UI/actions/runs/16585418553/artifacts/3635154021


## Note
- This UI Automation is carried out on app that I created and hosted. So make sure the app is up before running. 
- Hosted App: https://expense-tracker-client-oxvv.onrender.com/
- The base URL is configured in the Playwright config file, so no changes is needed in the code.