# Design Your Life - Back End

Backend documentation for Design Your Life.

# Auth 

### **Register**

HTTP type: **POST**

**endpoint:** /api/auth/register


name  | type | required | description
------------- | ------------- | ------------- | ------------- 
id (auto-generated)  | integer | yes | 
username | string | yes | must be unique
password | string | yes | must be unique

### **Login**


HTTP type: **POST**

**endpoint:** /api/auth/login


name  | type | required | description
------------- | ------------- | ------------- | ------------- 
username | string | yes | must be unique
password | string | yes | must be unique

### **Posts**


HTTP type: **GET**

**endpoint:** /api/posts


name  | type | required | description
------------- | ------------- | ------------- | ------------- 
id (auto-generated) | integer | yes | 
user_id | integer | yes | 
createdAt (auto-generated) | string | yes
postTitle | string | yes | Title of post
postBody | string | yes | Body of post
engagementScore | integer | yes | 
energyScore | integer | yes | 
