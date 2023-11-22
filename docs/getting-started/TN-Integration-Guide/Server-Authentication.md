## Server Authentication

Fiserv takes a three-pronged approach to establishing a trust relationship between the Client Server and the Fiserv ePayments Client Integration Server : 
&nbsp;

<div class="card-body">
<ul>
<li>Fiserv supports Mutual Server Certificate Authentication Only (also called Client Certificate Authentication). Fiserv uses Verisign, Thawte (www.thawte.com) and GeoTrust as its trusted Certificate Authority (CA), and all data passing through a client-server SSL connection is at least 128 bits encrypted. </li>

<li>Any access request must come from a Client Server whose IP address is contained in, and can be validated against, a client supplied, server IP address list. </li>

<li>Fiserv trusts that the Client has pre-authenticated any end user accessing the service. This means that the Client is responsible for establishing the end user’s identity before that end user is allowed access to TN, and that all end user payload information passed from the Client’s Server to the Fiserv ePayments Client Integration Server is valid. More information regarding the secure message exchange of payload information can be found in</li> [SSO - Payload Secure Message Exchange](?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/payload-secure-msg.md) . 

</ul>
</div>


&nbsp;

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
