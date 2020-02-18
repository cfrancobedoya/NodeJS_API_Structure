# NodeJS_API_Structure
In this course we will develop an API in Node, how to serve static files, provide security, work with a good architecture and more.

---
## What are and how are HTTP request used?
An HTTP request is a communication protocol that allows the transfer of information on hte web.
It is the common language for al communications.

The client sends a request to the internet, it's sent to the servers, then it's returned.

* Get, request.
* Host: Where am I asking;
* Refer: Where it comes from.
* User agent: Browser in few cases.
* Connection: How get the connection.
* Methods: You want to do.
* State: How was the operation.
* Body: What the server returns.

--- 
## Methods, headers and states
### HTTP methods:
* GET: Collect information from the server.
* POST: Add information to the server.
* PUT: Replace information on the server.
* PATCH: Update part of the information.
* DELETE: Delete information on methods (know if we can execute any of the above methods). 
* The headers will be sendind to the server how we want to make the request:
    * Authentication: Make sure you can ask the server for things.
    * Cache: Temporary storage. Manage for how long the response will be the same.
    * Indications.
    * Terms.
    * Cors: Cross origin resoucer sharing. Manage information from outside our service.
    * Cookies: Share information between requests.
    * Accept: Defines the content you accept.

### The states are numbers that indicate the status of the request:
* 2xx: Everything wen well.
    * 200: Ok.
    * 201: Created.
* 3xx: The request has been redirected.
    * 301: Moved permanently.
    * 304: Not modified.
* 4xx: Customer errors.
    * 400: Bad.
    * 401: Unauthorized.
    * 403: Forbidden.
    * 404: Not found.
* 5xx: There was an error processing the request.
    * 500: Internal server error.

---
## Body and query of the request
The body of the request is the information itself that we want to send, edit or have the server return to us.

The queries will allow you to add extra information to the data we want to send to the server.

### Body
The request information.
* The user data you want to add.

It depends on the headers:
* Content-Type:
    * text/html
    * text/css
    * application/javascript
    * image/jpeg
    * application/xml
* Content-Length

### REQUEST
* Post
* Get

### RESPONSE
Any method we receive from the server.

### QUERY
Extra information. Order in wich i want the parameters to return. For example when we pass an id.
```
* api.com/person?ordenBy=name&age=25
```

To share data with the frontend, you should never send sensitive information such as tokens or credit cards that can be visited in the parameters of the query for the ur,.
```
* miweb.com?color=red
```

### STRUCTURE
Add ? at the end of the URL.
```
* name=value&id=3
```

We separate with & if it's more than 2 parameter.

---
## Create an HTTP server from NodeJS
We start the project structure.
```
$ npm init
```

We install express to handle the connections.
```
$ npm i express
```

Run the server
```
$ node server
```

---
## How request can come
* Post
* Delete
* Get
* Patch

---
## Receive information from the client: Body and Query
Update the server when we make changes to the code.
```
$ sudo npm install -g nodemon
```

We install the express module to work with the body.
```
$ npm i body-parser
```

We send parameters to the request.
```
 http://localhost:3000/message?orderBy=id
```

---
## Contextual information: Read the headers
To print the headers:
```
console.log(req.headers)
```

To modify the headers:
```
res.header({
        "custom-header": "Our custom value. Developed by C",
});
```

---
## Response types
* Empty: Dosn't return body.
* Plane text
* With data
* Structured

---
## Consistent answers
We create the response file, to generalize responses and be more consistent with our backend.

---
## Serve static files
Usin express, we handle static files like html or css.

---
## Errors: How to present them and security implications.
Never send confidential information of errors to the client.

---
## Routes and network layer: Responsabilities and limits
We separeate the nework of the server and create a component network administrator.

---
## Controllers: Defining the business logic
Defining the business logic.

---
## Storing information in a database 
We create the data layer of the user component.

---
## Types of database: 
### Relational databases:
It is not a very flexible database, but ut has in favor its great support and the enormous develpment in tools for its use. If we need to change a value of a field, we must do it with all the fields of our DB, however with NoSQL or Non-relational it is not like that.

### Non-Relational databases:
They are from databases without a fixed table such as those found in relational databases, witch allows a high scalability of them. In addition, it's open and therefore flexible to different types of data and does not need so many resources to run; In fact, the necessary hardware dos not cost much.

---
## MongoDB: Store and read data
We install mongoose to handle the schemes.
```
$ npm i mongoose & mongodb
```