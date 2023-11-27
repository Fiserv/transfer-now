## Payload Parameters


The end user payload that a Client sends to Fiserv is composed of various parameter name/value pairs, transmitted to the Fiserv ePayments Client Integration Server in the form of an https POST (and NOT an https GET).


&nbsp;


**See The Below Tables For More Information**


[User Profile Payload Elements](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-1.md) - defines the User Profilepayload elements. </br>

[Account Profile Payload Elements](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-2.md) - defines the Account Profile payload elements. </br>

[Card Account Profile Payload Elements](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-3.md) (only applicable if a client has enabled Simple Business support in TN) - defines the Card Account Profile payload elements that Fiserv processes as part of a client payload secure message post.</br>

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

Payload elements that are listed in ( [User profile parameter-Table](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-1.md) and [Account Profile Payload Elements-Table](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-2.md)) as being optional payload parameter but Fiserv strongly suggests Client include parameter and associated value for Risk Management purposes identify those elements where it is up to the Client to decide whether that respective element will be passed to Fiserv. Failing to pass such an element to Fiserv could have risk implications. For example, a client choosing not to pass the user-in-good-standing payload element could result in Fiserv revisiting any risk agreement pre-negotiated with the Client under the assumption that all Risk Management payload elements would be passed to Fiserv. Additionally, the Client excluding any element identified as a Risk Management element could hinder Fiserv’s ability to detect end user fraud or misuse of services. 


&nbsp;

[User Profile Payload Elements](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-1.md)    
[Account Profile Payload Elements](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-2.md)     
[Card Account Profile Payload Elements](?path=docs/getting-started/TN-Integration-Guide/SSO-Tables/table-3.md)     


<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height:300;
  width:400;
}
</style>

