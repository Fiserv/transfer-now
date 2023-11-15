## Cascading Style Sheet (CSS) 

Clients can manipulate the “look and feel” of the TransferNow front end user interface using a cascading style sheet (CSS). Typical elements on a HTML page that are controlled by a CSS are the font type, font color, size of a table, etc. When a client fills out the DGF, Fiserv provides the client with the default CSS, which the client changes to match their desired design. 

Clients may view and update the CSS in the following ways: 


<div class="card-body">
<ul>
<li>Using most HTML design applications will generally have a preview option that allows clients to see the result before it's published in production.</li>
<li>Manually, Fiserv sends the client a composite HTML sample and a CSS that controls the elements on that HTML. Clients use the HTML sample to identify the controlling elements in the CSS. Then, clients can make and save changes in the CSS and view the outcome in the HTML sample.</li>
</ul>
</div>


<!-- theme: info -->

> :memo: _**Note:** Once Fiserv receives the CSS from the client, Fiserv applies these elements to the TransferNow UI. 

**To Know more visit the below Guidelines:**

[The Data Gathering Form (DGF) ](?path=docs/getting-started/TN-UI-Widget/The_Data_Gathering_Form.md)    
[Email Specifications ](?path=docs/getting-started/TN-UI-Widget/Email_Specifications.md)     
[Exit URL ](?path=docs/getting-started/TN-UI-Widget/Exit_URL.md)    


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

