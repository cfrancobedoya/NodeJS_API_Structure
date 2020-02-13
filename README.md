# NodeJS_API_Structure
In this course we will develop an API in Node, how to serve static files, provide security, work with a good architecture and more.

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