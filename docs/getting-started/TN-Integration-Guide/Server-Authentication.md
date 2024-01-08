## Server Authentication  



Fiserv takes a three-pronged approach to establishing a trust relationship between the Client Server and the Fiserv ePayments Client Integration Server: 


<div class="card-body">
<ul>
<li>Fiserv supports Mutual Server Certificate Authentication Only (also called Client Certificate Authentication). Fiserv uses Verisign, Thawte (www.thawte.com) and GeoTrust as its trusted Certificate Authority (CA), and all data passing through a client-server SSL connection is at least 128 bits encrypted.</li>
 
<li>Any access request must come from a Client Server whose IP address is contained in, and can be validated against, a client supplied, server IP address list. </li>

</div>
</ul>


Fiserv trusts that the Client has pre-authenticated any end user accessing the service. This means that the Client is responsible for establishing the end user’s identity before that end user is allowed access to TN, and that all end user payload information passed from the Client’s Server to the Fiserv ePayments Client Integration Server is valid. More information regarding the secure message exchange of payload information can be found in [SSO - Payload Secure Message Exchange](?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/payload-secure-msg.md). 

 
<div class="server-authentication-button-container">
    <br>
    <div class="server-authentication-left-button">
        <a href="?path=docs/getting-started/TN-Integration-Guide/SSL-Authentication.md">Back</a>
    </div>
</div>
<style>
    .server-authentication-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .server-authentication-left-button a
    {
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
    .ssl-authentication-left-button a{ 
        left: 0;
    }
    .ssl-authentication-left-button a:hover {
        color: #f60;
        background-color: white;
        border: 2px solid #f60;
    }
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
