# Design Your Life - Back End

Backend documentation for Design Your Life - Lambda School Build Week - June 24-28

# Schema 

### User


    {
        "id": 1, //string, primary key
        "username": "something", //string, unique, required
        "password": "$2a$12$hkkcyirSYUVs1PrIyoZfAeoOjqDRVNXYl7pMZTOI5ab5O1FxbkP.e" //string, unique, required
    }

### Post    


    {
        "id": 1,        //string, primary key
        "user_id": 1,       //string, foreign key, required
        "postTitle": "Title Example",       //string, required
        "postBody": "Body Example",     //string, required
        "createdAt": "June 24th 2019, 10:46 am",        //string, required
        "engagementScore": 1,       //integer, required
        "energyScore": 1           //integer, required
    }

# Auth 

### **Register**

HTTP type: **POST**

**endpoint:** https://dyl-backend.herokuapp.com/api/auth/register


name  | type | required | description
------------- | ------------- | ------------- | ------------- 
id (auto-generated)  | integer | yes | 
username | string | yes | must be unique
password | string | yes | must be unique

A successful register request will result in a `[201]` status code and will return something similar to the following:
```javascript
    {
    "user": {
        "username": "username",
        "password": "$2a$12$UcQeyYe6lLKBKo1/gnJyJuqUElGy3.TMezHUyBrcUS4vbvwCzJ0s6"
            },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYxNDczODM2LCJleHAiOjE1NjE1MTcwMzZ9.PPV6bXPm-GzMYa-QGL6ygwfxYo6LAp7vwadi2MK2x_Y"
    }
```
An unsuccessful register request will result in a `[401]` status code and will return the following:
```javascript
    {
        "message": "Invalid credentials"
    }
```
A register request with one empty field will result in a `[400]` status code and will return the following:
```javascript
    {
        "message":"Both username and password are required."
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
A login request with one empty field will result in a `[400]` status code and will return the following:
```javascript
    {
        "message":"Both username and password are required."
    }
```

### **Home**
### Get Posts By User ID 
HTTP type: **GET**

**endpoint:** https://dyl-backend.herokuapp.com/api/home/:id

Will return all the posts with a matching user ID. Will return an empty array if there are no posts with a matching user ID.

### **Posts**

### Get All Posts 
HTTP type: **GET**

**endpoint:** https://dyl-backend.herokuapp.com/api/posts

Will return all posts (get posts by user ID should be used to retrieve a user's posts indstead of this method).

### Get Individual Post By Post ID 
HTTP type: **GET**

**endpoint:** https://dyl-backend.herokuapp.com/api/posts/:id

Will return the individual post with a matching the post ID. 

### Update Post 
HTTP type: **PUT**

**endpoint:** https://dyl-backend.herokuapp.com/api/posts/:id

Will update the post with the matching post ID.
A successful update request will result in a `[200]` status code and will return the following:
```javascript
    {
        "message":"Post updated successfully!"
    }
```
An update request with a missing required fieldwill result in a `[400]` status code and will return the following:
```javascript
    {
        "message":"Missing required field(s)"
    }
```

### Remove Post 
HTTP type: **DELETE**

**endpoint:** https://dyl-backend.herokuapp.com/api/posts/:id

Will remove the post with the matching post ID.
A successful removal request will result in a `[200]` status code and will return the following:
```javascript
    {
        "message":"Post removed successfully"
    }
```

### New Post 
HTTP type: **POST**

**endpoint:** https://dyl-backend.herokuapp.com/api/posts
A successful post request will result in a `[200]` status code and will return the following:
```javascript
    {
        "message":"Post added successfully!"
    }
```

A post request with a missing required field will result in a `[400]` status code and will return the following:
```javascript
    {
        "message":"Missing required field(s)"
    }
```




name  | type | required | description
------------- | ------------- | ------------- | ------------- 
id (auto-generated) | integer | yes | 
user_id  | integer | yes | Foreign key
createdAt  | string | yes
postTitle | string | yes | Title of post
postBody | string | yes | Body of post
engagementScore | integer | yes | 
energyScore | integer | yes | 
