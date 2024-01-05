## SSO - Payload Secure Message Exchange


Assume a client’s end user has logged into the Client’s web page and now attempts to access the service via the Client’s TN page link. Before the Fiserv ePayments Client Integration Server can grant access to the requested service, it expects that the Client has included as part of the access request information specific to the end user only (i.e., account data, contact information, etc.). Upon receiving this end user payload information, the Fiserv ePayments Client Integration Server will check to ensure that all required information is part of the request; if the Fiserv ePayments Client Integration Server deems the payload as being valid, it will return an application session key back to the Client’s server. The Client will then use this session key as part of the end user redirect to the Fiserv ePayments Application Server. 

&nbsp;

<center>

![Image](../../../../assets/images/payloadsecuremessageexchange.png) <br />


</center>



## See Also
[Payload Parameters](?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/payload-parameters.md)   
[Error Handling / Error Codes](?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/error-handling-error-codes.md)      
[Payload Submission](?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/payload-submission.md)   

<div class="sso-payload-button-container">
    <br>
    <div class="sso-payload-left-button">
        <a href="?path=docs/getting-started/TN-Integration-Guide/transfernow-integration-guide.md">Back</a>
    </div>
    <div class="sso-payload-right-button">
        <a href="?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/payload-secure-msg.md">Next</a>
    </div>
</div>
<style>
    .sso-payload-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .sso-payload-left-button a,
    .sso-payload-right-button a{
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
    .sso-payload-left-button a{ 
        left: 0;
    }
    .sso-payload-right-button a{
        right: 0;
    }
    .sso-payload-left-button a:hover,
    .sso-payload-right-button a:hover {
        color: #f60;
        background-color: white;
        border: 2px solid #f60;
    }
    .card-body
    {
        background:#f1f1f101;
        padding:1em;
    }
    .card-body ul 
    {
        list-style: none;
        padding-left: 20px;
    }
    .card-body ul li::before 
    {
        content: "\2022";
        font-size: 1em;
        color: #f60;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
        margin-bottom:10px;
    }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height:300;
    width:400;
  }
</style>