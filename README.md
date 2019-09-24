# react-ssr-joblist

## Getting Started

# Requirements

```
 * Make sure you have latest node version installed on your machine
```

## Clone or fork this repo and install dependencies

```
bash
  git clone https://github.com/yashwantsinghzala/react-ssr-joblist.git
  cd react-ssr-joblist
  npm install

```

## Running the project

```

go to root directory
cd react-ssr-joblist

running the app

 npm run dev

running the test cases

npm run test

defalut port is set to 4000 , once you run the 'npm run dev' command . you need to open
url  http://localhost:4000

```

## Tasks

```

- Created react-ssr-joblist app which renders from server side.

- Used dependency such as Material UI for ui components ,react router for both serverside and client side routing ,redux for storing the data and Jest ,enzyme in order to test react components and reducer .

- Home page will display dummy data which contains list of jobs , clicking further to it will route to description page of particular job.

- Details page have job description and link to home page , clicking on it will result in redirecting to home page which shows all the jobs.

```

## Implementaion Approach

- App is structured in modular design pattern which consist of src folder which is having components ,container, reducer and can have related actions and constant file. we have server.js for node server setup using express in order to provide web application framework.

- Added webpack.client for client configuration and webpack.server for server configuration in order to make respective builds.

- Added scripts with in package.json which would help if someone want to run some specific configuration.

- Added Jest and enzyme configuration in order to setup test environment .we have app.test.js at root level in order to cover test cases for current app, we can also add it at each component level witin src but that would help if we have large application.

- Used Material-Ui components to dispaly UI list.

- We have two basic components which is being used to list down the job (JobList.js) and for description (JobDetail.js)
