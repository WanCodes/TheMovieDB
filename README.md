# The Movie DB challenge

## Getting Started

Run "npm install" to download all the node packages.

Create a file on the root directory and name it ".env.development", add the follow text "REACT_APP_DEV_API_KEY=api-key-here" and replace "api-key-here" with you TMDB API key.

Run "npm start" will automatically run the application on http://localhost:3000/

Run "npm test" will launch the test runner in the interactive watch mode.

## About the project

Built using create-react-app with the following packages:

To auto compile and watch SASS the following packages was installed "node-sass-chokidar" and "npm-run-all".  The "package.json" file run scripts was also modified to execute the packages.

Some unit testing was added to a few components to test if they rendered correctly when receiving the right props.  The packages used are "enzyme", "enzyme-adapter-react-16" and "react-test-renderer";

The "prop-types" package was also added to help validate property types a component receives.

Third party slider component "rc-slider" was used for the vote slider and slider tooltip.