# Design Your Life - Back End

Backend documentation for Design Your Life.

# Auth 

### **Register**

**endpoint:** /api/auth/register


name  | type | required | description
------------- | ------------- | ------------- | ------------- 
id (auto-generated)  | integer | yes | 
username | string | yes | must be unique
password | string | yes | must be unique

### **Login**

**endpoint:** /api/auth/login


name  | type | required | description
------------- | ------------- | ------------- | ------------- 
username | string | yes | must be unique
password | string | yes | must be unique