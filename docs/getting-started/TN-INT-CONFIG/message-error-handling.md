
## Fiserv Secure Message Exchange Error Handling

The TN service contains a robust error handling framework that will alert both the Client and end user to potential issues when attempting to access or during use of the service. Additionally, there may be that rare instance when the Client is unable to access the service because either the Fiserv ePayments Client Integration Server is unavailable, or the Fiserv ePayments TN Application Server is unavailable.

The sub-sections that follow provide the Client with the needed insight into possible service errors and what steps, if any, the Client will need to take to handle such errors.

Fiserv ePayments Client Integration or Web Application Server Not Available Error Codes.

If the Fiserv Integration Server becomes unexpectedly unavailable when the Client sends an end user payload, the Client will receive one of the following errors:

<div class="card-body">
<ul>
<li>HTTP 500 Internal Server Error</li>

<li>HTTP 502 Bad Gateway Error</li>

<li>HTTP 503 Service Unavailable Error</li>
</ul>
</div>

If the Fiserv TN Application Server becomes unexpectedly unavailable as part of the Client end user redirect to the TN service, the Client will receive one of the following errors:

<div class="card-body">
<ul>
<li>HTTP 403 Server Refusing to Respond to Request Error</li>

<li>HTTP 404 Service Not Found Error</li>
</ul>
</div>

<style>
    .card-body ul {
        list-style: none;
        padding-left: 20px;
    }
    .card-body ul li::before {
        content: "\2022";
        font-size: 1.5em;
        color: #f60;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
</style>

> :memo: _**Note:** The Client will need to perform the proper error handling for any of the above returned errors, as well as inform the end user that the service is temporarily unavailable._

