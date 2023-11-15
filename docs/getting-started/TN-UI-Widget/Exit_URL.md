## Exit URL 

Using the DGF, an FI provides Fiserv with an exit URL, so that Fiserv knows where to route a user after TransferNow times out. 

An FI can also pass an exit URL to Fiserv in the session payload. TransferNow first looks for an exit URL in the session payload details, and if present, then this URL takes precedence over the exit URL defined in the DGF. Otherwise, Fiserv uses the exit URL defined in the DGF. 

The FI should define the following exit URL: 

<div class="card-body">
<ul>
<li>RETURN_URL—Specifies the page to which to return the user when the user’s session times out on the Fiserv side.</li>
</ul>
</div>


**To Know more visit the below Configuration:**

[The Data Gathering Form (DGF) ](?path=docs/getting-started/TN-UI-Widget/The_Data_Gathering_Form.md)    
[Cascading Style Sheet (CSS) ](?path=docs/getting-started/TN-UI-Widget/Cascading_Style_Sheet.md)    
[Email Specifications ](?path=docs/getting-started/TN-UI-Widget/Email_Specifications.md)     


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