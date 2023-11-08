## First-Time Agreement Page Configuration


Each new end user accessing the service for the very first time will be presented with a First Time Agreement page.

<center>
<img src="../../../assets/images/First_Time_Aggreement.png" width="400" height="400"> <br/>
</center>
&nbsp;

The end user must agree to the terms and conditions detailed in the text of the agreement before being allowed access to the service. The language used in the agreement is always defined by the Client and the actual agreement text page itself can be hosted either on the Fiserv side or on the Client side. 
&nbsp;

There are three configuration options available to the Client with regard to the behavior of user agreement acceptance:


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

<div class="card-body">
    <ul>
        <li>Fiserv hosts the agreement page and tracks end user agreement acceptance.</li>
        <li>Client hosts the agreement page and tracks end user agreement acceptance.</li>
        <li>Fiserv configures a Client specified URL pointing to a Client hosted agreement page that contains only agreement text, and Fiserv tracks end user agreement acceptance.</li>
    </ul>
</div>
&nbsp;

> :memo: _**Note:** The Client preference for this option is to be indicated in the DGF._


### Page Footer Configuration

Most Fiserv-hosted pages display a footer containing Client-defined URLs that link to the Client’s Terms of Service, Security Policy, and Privacy Policy. Each URL, when selected, will result in the content being displayed in a separate pop-up window.
&nbsp;

Also, content that each URL points to is hosted by the Client and not Fiserv, and if the Client does not define a URL for one of the footer links, then that link will not be displayed on any applicable Fiserv hosted page.
&nbsp;

> :memo: _**Note:** The Client preference for this option is to be indicated in the DGF._


&nbsp;

### See Also

[First-Time Agreement Page Configuration](?path=docs/getting-started/TN-INT-CONFIG/TN-Int-Config-Guide.md)

[Help Link Configuration](?path=docs/getting-started/TN-INT-CONFIG/Help-Link-Config.md)

[Session Timeout Configuration](?path=docs/getting-started/TN-INT-CONFIG/Session-Timeout-Config.md)

[Session Keep-Alive Configuration](?path=docs/getting-started/TN-INT-CONFIG/Session-keep-alive-config.md)

[Security Integration and Configuration Options](?path=docs/getting-started/TN-INT-CONFIG/Security-Int-Config.md)

[Fiserv Supported Modes of Server Authentication](?path=docs/getting-started/TN-INT-CONFIG/server-auth.md)

[Guidelines for Obtaining a CA Issued SSL Digital Server Certificate](?path=docs/getting-started/TN-INT-CONFIG/Guidelines-Obtain.md)

[Client / Fiserv Payload Secure Message Exchange](?path=docs/getting-started/TN-INT-CONFIG/client-payload.md)

[Fiserv Secure Message Exchange Error Handling](?path=docs/getting-started/TN-INT-CONFIG/message-error-handling.md)

[Fiserv Payload Submission Error Codes](?path=docs/getting-started/TN-INT-CONFIG/payload-sub-error.md)

[Fiserv ePayments TN Application Error Codes](?path=docs/getting-started/TN-INT-CONFIG/epayment-TN-error-code.md)

[Fiserv ePayments Secure Message Exchange QA and Production Environments](?path=docs/getting-started/TN-INT-CONFIG/epayment-QA-prod.md)

