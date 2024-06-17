# Exercise 1 - Search User REST Service

## Description
To practise and review Express and MongoDB concepts, we are going to implement a simple RESTful API service. In details, we need to create APIs to serve Frontend app (that we implemented at React Practice 1).

### MongoDB setup
1. Database name should be **express-practice-1**. Ensure that Express can connect to the database successfully using **mongoose** module.

2. Create **User** schema as a metadata for **users** collection. The schema should contain these fields:

| Field    | Data Type |
| -------- | --------- |
| username | String    |
| email    | String    |
| birthday | Date      |

3. Use **MOCK_USERS.json** to initiate **users** collection.

### ExpressJS implementation
We are going to use Express to provide essential APIs.
1. GET /api/users
- This API is used to get all users that match the submitted search keyword.
- Query param: **search** is a string that is submitted to Express. We have to search across **users** collection to find out all documents that have fields **username** and/or **email** containing the **search**.
- Response code is 200 for success. Otherwise, the code is 500.
- Response data is formatted as JSON.

2. POST /api/users
- This API is used to create new users or update existing users.
- Request body contains a JSON-formatted list of users that need to be created/updated. The body in detail is up to your implementation.
- Create users parallelly: valid user data is created normally while invalid one is ignored.
- Response code is 200 for success. Otherwise, the code is 500.
- Response data is formatted as JSON.

## Up and running
Run this command for installation.
```
yarn
```

Next up, start the project
```
yarn start
```

Start for developing
```
yarn dev
```