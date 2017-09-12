# GitHub Followers

This project is to create a service that allows for a user to search for a GitHub username.

## Installation
- `git clone https://github.com/billdevcode/github-followers.git`
- `cd github-followers`
- `yarn install` or `npm install`
- `yarn start` or `npm start`
- The browser will open up with a new tab at http://localhost:3000/

## Project Details

- Display the user's GitHub profile, follower count, and a list of the user's follower avatars
- If the user has many followers, return a portion and create a "load more" button
- This button should persist until there are no more followers to fetch

## Tools

- Bootstrapped with minimal codes using [create-react-app](https://github.com/facebookincubator/create-react-app). Mainly `App`, `/src/index` and `registerServiceWorker` files.
- ReactJS - the cool stuff are in `/src`
- Components tested with Jest/Enzyme (`yarn test`)
- Hosted on Heroku (free hosting but takes a while to load) - https://github-followers-avatar.herokuapp.com/ 
- Responsive across devices
- Cross-browser tested

## Trade-offs

- No authentication - not secure but for our purposes, it should be fine (API limit is 60/hour)
- All CSS styles are located in `/src/User/User.css` - usually we separate them but for our purposes, it should be fine

## Live Site

#### https://github-followers-avatar.herokuapp.com/