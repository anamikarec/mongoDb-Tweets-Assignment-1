# mongoDb-Tweets-Assignment-1
Assignment-5467

#### Problem
- create Users, and Tweets Schema, Models
- create routes, and use validations
- create a CRUD application for a twitter application
- the tweet should have title, body, tags (array), user_id
- also add a users collections, keep username, email, id,
- create CRUD for users, and tweets
- /users - ( list all users ( with pagination) , create, delete, patch )
- /tweets - ( list all tweets ( w pagination), list tweet by user (w pagination), create, delete, patch )
- create an endpoint to search tweets by user_id, filter all tweets by a user
- apply pagination on it with skip and limit
- show total count as well, you can use .count() against the query
#### Validations
- create validations on each API endpoint

## How to run this program
- Step:1 First clone the repo
```js
  git clone https://github.com/anamikarec/mongoDb-Tweets-Assignment-1.git
```
- Step:2 Navigate inside the particular folder
```js
cd <folder_name>
```
- Step:3 Run the following command to install npm
```js
npm install
```
- Step:3 Run the following command to run the code
```js
  npm run start
```
- NOTE:~ Inplace of ```localhost``` use ```127.0.0.1```

- Then open the postman and do ```GET``` ```POST``` ```PATCH``` ```DELETE```request
