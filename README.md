# By Bits Code Challenge (By Miles) 🚗

A simple React application that allows users to login to an account then retrieve and view policy information. Data served by the By Bit mock [Policy API](https://api.bybits.co.uk/).

## Getting started

Fork and clone this project to your local machine, and once in the directory run `npm install` from your terminal.

### Prerequisites

The latest version of [Node.js](https://nodejs.org/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Instructions for use (example user flow)

* With the project running locally, navigate your browser to the front end of this project at https://localhost:3000.
* Enter a dummy username and password - for the purposes of this app, these can be anything, eg. username: `testuser`, password: `password123`.
* When the form validation conditions are met, click the **Sign In** button to login and proceed to the **/policy** page, where your policy information will be displayed.

## Notes

### Styling
There look to be some properties on the response body sent from the API that might, in some potential real-life use cases, benefit from being styled dynamically - hence the **determineIfArrOrObj** and similar functions in **Section.js**, and the splitting of **Policy** component into **Section** components. This is to allow for any possible restructuring of the data returned by the API in the future, should the need for more deeply-nested properties on the response object arise (eg. if a Proposer has multiple convictions / claims, or if any of the Additional Drivers on their policy were to have multiple convictions / claims).

My code assigns unique classnames for the JSX elements to be dynamically generated, and thus styled according to any front-end dev requirements. For now these are just based on the depth of nesting in the response object, whether or not the value of a given object property is an array or object etc. While the styling of the **Section** component could have been simplified or even hard-coded for this single instance of an API response, I wished to demonstrate the ability to render the data dynamically.

### Use of React hooks (vs. dummy functional components or class-based components)
While not strictly necessary, I created the **Policy** component as a **functional** React component making use of the **useState** and **useEffect** hooks - this is a lightweight component that, while making use of state, only needs the **componentDidMount** / **componentDidUpdate** lifecycle methods. This seemed like a good use case for hooks, to keep the component lean.

 It could have been formulated as a fully stateful **class-based** component, or the **api.getPolicy** API call could occur higher up in the application structure eg. the **App** component, with its response passed to a dumb, **stateless** functional Policy component - but I decided, since this API call was to take place after sign-in is successfully completed, it could possibly make more sense if this API call took place in the **Policy** component itself, hence necessitating some use of state. I also wished to demonstrate the use of hooks and my consideration of an example use case for them.

### Form validation
For the purposes of demonstrating rudimentary form validation, I made use of the [Formik](https://formik.org/) and [Yup](https://www.npmjs.com/package/yup) libraries - no criteria were specified for valid usernames / passwords for using the API, so some simple and arbitrary conditions have been implemented. A possibly unnecessary step, but there to demonstrate a basic implementation of front-end validation.

### API authentication
While I sought to demonstrate the successful authentication of a dummy user using the **access_token** returned by the API as requested by the challenge, I noticed that the **/policys/details/** API sometimes (seemingly mistakenly?) sent back a response object containing policy data _even when_ the request was sent without an **Authorization** header containing the **access_token**. I checked this multiple times both using my app, by making a **cURL** API request in the terminal, and by making an API request using [Insomnia](https://insomnia.rest) REST client containing the headers specified in the challenge description - the result was the same in all instances.

It was not specified in the challenge description to persist a user's authentication across sessions - given more time, I would have made use of the browser **localStorage** object, setting the returned access and refresh tokens and specifying an expiration date as necessary.

### Estimated time to complete challenge
* I allowed myself a total of roughly **3 - 4** hours:
  - *one* hour for project configuration, set-up and structuring
  - *one* hour for creation of the **Sign In** page and form functionality
  - *one* hour for creation of the **Policy** page and manual testing of the application's functionality
  - additional time for experimenting with styling and refactoring

## Technologies used
* [React.js](https://reactjs.org/), initialized with [Create React App](https://github.com/facebook/create-react-app) - application
* [Reach Router](https://reach.tech/router/) - routing
* [Formik](https://formik.org/) and [Yup](https://www.npmjs.com/package/yup) - form validation

## Author 
This challenge was completed by **Sam Lea** - contact me on `samuel.lea@live.co.uk`.
