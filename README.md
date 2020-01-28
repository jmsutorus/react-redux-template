# Dashboard Frontend (ng-dashboard)

---

This is a Proof of Concept for Media Master.
Linting is done using eslint and follows airbnbs js and react style
Configure your favorite editor to follow the rules in .eslintrc.json
This project uses Redux for all state management

---

### Maintainer Contact Information

Direct Contact<br>
Joseph Sutorus<br>
sutorus.joseph@heb.com

---

##📝 Prerequisites

React version 16.12.0<br>
Node version 10
Both the frontend and the backend are required to run.
Must be on the H-E-B network connection either through wifi or through VPN.

##🚀 Getting Started

`git@gitlab.com:heb-engineering/teams/platform-engineering/app-dev-squad/media-master-poc-ui.git`
Download dependencies with `npm install`<br>
Run the frontend code with `npm start`
Style guides can be found here
[JS Best Practices](https://github.com/airbnb/javascript)
[React Style Guide](https://github.com/airbnb/javascript/tree/master/react#naming)
[CSS Style Guide](https://github.com/airbnb/css)

##🧐 What's Inside?

.
├── src
│   ├── actions
│   ├── components
│   ├── constants
│   ├── helpers
│   ├── hooks
│   ├── pages
│   └── reducers
├── .eslintrc
├── .gitlab-ci.yml
├── .stylelintrc
├── .prettierrc
├── Dockerfile
├── package.json
└── yarn.lock

1. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser).

2. **`.eslintrc`**: This is a configuration file for [EsLint](https://eslint.org/). Eslint is a tool to help developers discover problems with their JavaScript code without executing it.

3. **`.gitlab-ci.yml`**: This is a configuration file for the GitLab pipelines and our build process.

4. **`.stylelintrc`**: This is a configuration file for [StyleLint](https://stylelint.io/) StyleLint is a linter that helps you avoid errors and enforce conventions in your css styles.

5. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

6. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

7. **`yarn.lock`** This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**


##🧪 Testing

Testing is done using Jest
Runs tests and coverage
`npm run test`
Ensure that all tests pass and coverage is > 80%

##📖 Contributing

Submit a PR for review.
Before being merge your pipelines must pass

##👷‍️👷‍ Building
N/A

###🚢 Deploying
N/A

##⁉️ Monitoring & Alerting
N/A

