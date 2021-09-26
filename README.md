# rea-challenge

<b>
Overview
</b>

This project is a simple react-typescript based application where users can view properties and save them which are of interest by hovering on the property with their mouse cursor. This application is desinged to work in chrome version 92.0.4515.159 or below. In future the scope expands to support for cross-browser.
Before we dive deep into the installation we need to make note of a few things. 

<b>This installation is specifically for mac users. The application can be installed on windows via similar alternative window commands.</b>

# Node Version

This application runs on node version 14 or above. In order to install node please click on the following link.
https://nodejs.org/en/download/
Install the version as per your system requirements. Once installed please check the node version in your terminal

```
node --version
```

If you already have installed node version less than 14 on your system one can easily manage their node version by installing nvm aka node version manager by using the follwoing link.
Mac: https://tecadmin.net/install-nvm-macos-with-homebrew/
Windows: https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows
Once install please run the follwoing commands in terminal

```
nvm install ls
nvm install v14
nvm use v14
```

#Installation

Step 1: Clone the application from git into your local.
```
git clone https://github.com/sarathgalavalli/rea-challenge.git
```

Step 2: Open terminal and change directory to rea-challenge and run
```
npm install
```

Step 3: Build the applciation
```
npm build
```

Step 4: Run the application. this should open the application in your browser via localhost:8080 until unless something else is running the port or already using the port.
```
npm run dev
```

# Storybook

This application was created using storybook, an application for UI renderer to create and render components. The documentation of story book can be found via https://github.com/storybookjs/storybook/blob/next/README.md
The storybook has been added to the applciation to have better documentation for application at component level where any user can play around with each component to understand the application at component level. In order to access the components used in the application or to play around with components run:
```
yarn storybook
```

#Testing




