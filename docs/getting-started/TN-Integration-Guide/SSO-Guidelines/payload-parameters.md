## Payload Parameters


The end user payload that a Client sends to Fiserv is composed of various parameter name/value pairs, transmitted to the Fiserv ePayments Client Integration Server in the form of an https POST (and NOT an https GET).


&nbsp;


**See The Below Tables For More Information**

<table class="digi-table">
<tr>
<td>
<a href="../docs/?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-1.md">User Profile Payload Elements</a>
</td>
<td>
defines the User Profile payload elements.
</td>
</tr>
<tr>
<td>
<a href="../docs/?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-2.md">Account Profile Payload Elements</a>
</td>
<td>
defines the Account Profile payload elements.
</td>
</tr>
<tr>
<td>
<a href="../docs/?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-3.md">Card Account Profile Payload Elements</a>
</td>
<td>
(only applicable if a client has enabled Simple Business support in TN) - defines the Card Account Profile payload elements that Fiserv processes as part of a client payload secure message post.
</td>
</tr>
</table>

Each table provides a description of each payload element, any associated usage restrictions, and the error flow that either the service application takes, or the Client should take if a payload issue is detected. 

Payload elements that are listed as being a required payload parameter must be present in every Client submitted payload. In most cases, the absence of a required payload element or its associated allowed value will result in one of the following behaviors: 

<div class="card-body">
    <ul>
        <li>The Fiserv server will return an SS error code which must be handled by the Client. 
        </li>
        <li>Fiserv displays an application error page containing an SS error code to the end user (which does not need to be handled by the Client). 
        </li>
        <li>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload. However, failure to pass the parameter or setting it to an unacceptable value could result in the associated account being displayed as suspended, thus making that account ineligible for transfers. 
        </li>
    </ul>
</div>

<style>
    .card-body ul {
        list-style: none;
        padding-left: 20px;
    }
    .card-body ul li::before {
        content: "\2022";
        font-size: 1em;
        color: #f60;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
</style>

Payload elements that are listed in ( [User Profile Payload Elements-Table](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-1.md) and [Account Profile Payload Elements-Table](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-2.md)) as being optional payload parameter but Fiserv strongly suggests Client include parameter and associated value for Risk Management purposes identify those elements where it is up to the Client to decide whether that respective element will be passed to Fiserv. Failing to pass such an element to Fiserv could have risk implications. For example, a client choosing not to pass the user-in-good-standing payload element could result in Fiserv revisiting any risk agreement pre-negotiated with the Client under the assumption that all Risk Management payload elements would be passed to Fiserv. Additionally, the Client excluding any element identified as a Risk Management element could hinder Fiserv’s ability to detect end user fraud or misuse of services. 


&nbsp;

**To Know More About Table Details**

[User Profile Payload Elements](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-1.md)    
[Account Profile Payload Elements](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-2.md)     
[Card Account Profile Payload Elements](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-3.md)     


<div class="payload-parameters-button-container">
    <br>
    <div class="payload-parameters-left-button">
        <a href="?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/payload-secure-msg.md">Back</a>
    </div>
    <div class="payload-parameters-right-button">
        <a href="?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/error-handling-error-codes.md">Next</a>
    </div>
</div>
<style>
    .payload-parameters-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .payload-parameters-left-button a,
    .payload-parameters-right-button a{
        position: absolute;
        display: inline;
        border: 0px;
        background: rgb(255, 102, 0);
        color: rgb(255, 255, 255);
        padding: 8px 22px;
        cursor: pointer;
        border-radius: 4px;                                
        text-align: center;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    .payload-parameters-left-button a{ 
        left: 0;
    }
    .payload-parameters-right-button a{
        right: 12px;
    }
    .payload-parameters-left-button a:hover,
    .payload-parameters-right-button a:hover {
        color: #f60;
        background-color: white;
        border: 2px solid #f60;
    }
    .center {
      display: block;
      margin-left: auto;
      margin-right: auto;
      height:300;
      width:400;
    }
      .digi-table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      .digi-table td, #customers th {
        border: 1px solid #ddd;
        padding: 8px;
      }
      .digi-table tr:nth-child(even){background-color: #f2f2f2;}
</style>

