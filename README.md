# Design Your Life - Back End

Backend documentation for Design Your Life - Lambda School Build Week - June 24-28

# Auth 

### **Register**

HTTP type: **POST**

**endpoint:** https://dyl-backend.herokuapp.com/api/auth/register


name  | type | required | description
------------- | ------------- | ------------- | ------------- 
id (auto-generated)  | integer | yes | 
username | string | yes | must be unique
password | string | yes | must be unique

A successful login request will result in a `[201]` status code and will return something similar to the following:
```javascript
    {
    "user": {
        "username": "username",
        "password": "$2a$12$UcQeyYe6lLKBKo1/gnJyJuqUElGy3.TMezHUyBrcUS4vbvwCzJ0s6"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYxNDczODM2LCJleHAiOjE1NjE1MTcwMzZ9.PPV6bXPm-GzMYa-QGL6ygwfxYo6LAp7vwadi2MK2x_Y"
    }
```
A unsuccessful login request will result in a `[401]` status code and will return the following:
```javascript
    {
        "message": "Invalid credentials"
    }
```

### **Login**


HTTP type: **POST**

**endpoint:** https://dyl-backend.herokuapp.com/api/auth/login


name  | type | required | description
------------- | ------------- | ------------- | ------------- 
username | string | yes | must be unique
password | string | yes | must be unique

A successful login request will result in a `[200]` status code and will return something similar to the following:
```javascript
    {
        "message":"Welcome ${user.username}! Have a token!",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4LCJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYxNDc2NTcwLCJleHAiOjE1NjE1MTk3NzB9.NaXfLgpVadotfgRlFnA57Co5VKYymD2-d_kK1Gwur7Q"
    }
```
    

### **Posts**

### Get All Posts 
HTTP type: **GET**

**endpoint:** https://dyl-backend.herokuapp.com/api/posts

### Get Posts By User ID 
HTTP type: **GET**

**endpoint:** https://dyl-backend.herokuapp.com/api/posts/:id

Will return all the posts with a matching user ID. Will return an empty array if there are no posts with a matching user ID.

### New Post 
HTTP type: **POST**

**endpoint:** https://dyl-backend.herokuapp.com/api/posts


name  | type | required | description
------------- | ------------- | ------------- | ------------- 
id (auto-generated) | integer | yes | 
user_id | integer | yes | 
createdAt (auto-generated) | string | yes
postTitle | string | yes | Title of post
postBody | string | yes | Body of post
engagementScore | integer | yes | 
energyScore | integer | yes | 
