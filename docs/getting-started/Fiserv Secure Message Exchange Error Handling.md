## Fiserv Secure Message Exchange Error Handling

The TN service contains a robust error handling framework that will alert both the Client and end user to potential issues when attempting to access or during use of the service. Additionally, there may be that rare instance when the Client is unable to access the service because either the Fiserv ePayments Client Integration Server is unavailable, or the Fiserv ePayments TN Application Server is unavailable. 
The sub-sections that follow provide the Client with the needed insight into possible service errors and what steps, if any, the Client will need to take to handle such errors.

Fiserv ePayments Client Integration or Web Application Server Not Available Error Codes
If the Fiserv Integration Server becomes unexpectedly unavailable when the Client sends an end user payload, the Client will receive one of the following errors:

-	HTTP 500 Internal Server Error 
-	HTTP 502 Bad Gateway Error 
-	HTTP 503 Service Unavailable Error

If the Fiserv TN Application Server becomes unexpectedly unavailable as part of the Client end user redirect to the TN service, the Client will receive one of the following errors:

-	HTTP 403 Server Refusing to Respond to Request Error 
-	HTTP 404 Service Not Found Error

<!-- theme: info -->

>:memo: **Note:** The Client will need to perform the proper error handling for any of the above returned errors, as well as inform the end user that the service is temporarily unavailable.

