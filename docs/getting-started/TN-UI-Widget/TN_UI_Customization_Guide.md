## TN UI Customization Guide 

Users have the capability to design the UI to match their own “Look and Feel” in TransferNow User Interface. 

Users provide the information specific to their institution and their desired customizations using the following TransferNow documents: 

<div class="card-body">
<ul>
<li>The Data Gathering Form (DGF) </li>
<li>Cascading Style Sheet (CSS)</li>
<li>Email Specifications</li>
<li>Exit URL</li>
</ul>
</div>


<!-- theme: info -->

> :memo: _**Note:** An FI has the option to either allow Fiserv to host the CSS, or to use their own CSS, and pass the CSS URL to Fiserv via SSL Secure Messaging._


 Since TransferNow is a secured application, Fiserv advises that users do not use the browser provided Back and Forward buttons/icons while using TransferNow. Previous and Next buttons are provided in TransferNow for back and forward navigation.

 An FI can customize any instructional text that is displayed on the TransferNow user interface (UI).

 
**To Know more visit the below Guidelines:**

<div>
    <input type="checkbox" class="collapsible-checkbox" id="section1">
    <label class="label-expand" for="section1">Email Specifications</label>
    <div class="content-expand">

<p>Many events occur within TransferNow warrants an email to be sent to the user. TransferNow offers many emails to assist with client-to-customer communications. All TransferNow emails are triggered by the occurrence of an event, either automated or manually. These event triggers can be categorized into the following groups: </p> 

<div class="card-body">
<ul>
<li>UI emails are triggered by user actions while the user is still in the online session.</li>
<li>Compass emails are triggered by activities performed by Customer Service Representatives (CSR) in Compass.</li>
<li>Transaction emails are sent at specific transaction “highlights.”</li>
<li>Reminder emails are sent to remind users to complete some portion of the transaction.</li>
</ul>
</div>

<blockquote class="block-quote">

:memo: _**Note:** <i> All TransferNow emails are sent at the client’s discretion. Clients can turn each email on or off based on their business needs._</i> </blockquote> 
<blockquote class="block-quote">

:memo: _**Note:** <i> An email is ON or OFF for either all or no users._</i> </blockquote>

</div>
</div>
</br>

<div>
    <input type="checkbox" class="collapsible-checkbox" id="section2">
    <label class="label-expand" for="section2">The Data Gathering Form (DGF)</label>
    <div class="content-expand">

<p>Fiserv ePayments provides a Data Gathering Form (DGF) to TransferNow clients. The DGF guides clients through the configuration and customization of the TransferNow services, and ultimately provides Fiserv with the data necessary to set up the service. </p>

<p>A partial list of configurable elements is given below: </p>


<div class="card-body">
<ul>
<li>Common Screen Elements</li>
<li>Emails</li>
<li>Cascading Style Sheet (CSS)</li>
<li>Product features.</li>
</ul>
</div>

</div>
</div>
</br>

<div>
    <input type="checkbox" class="collapsible-checkbox" id="section3">
    <label class="label-expand" for="section3">Cascading Style Sheet (CSS)</label>
    <div class="content-expand">

<p>Clients can manipulate the “look and feel” of the TransferNow front end user interface using a cascading style sheet (CSS). Typical elements on a HTML page that are controlled by a CSS are the font type, font color, size of a table, etc. When a client fills out the DGF, Fiserv provides the client with the default CSS, which the client changes to match their desired design. </p>

<p>Clients may view and update the CSS in the following ways: </p>

<div class="card-body">
<ul>
<li>Using most HTML design applications will generally have a preview option that allows clients to see the result before it's published in production.</li>
<li>Manually, Fiserv sends the client a composite HTML sample and a CSS that controls the elements on that HTML. Clients use the HTML sample to identify the controlling elements in the CSS. Then, clients can make and save changes in the CSS and view the outcome in the HTML sample.</li>
</ul>
</div>
<blockquote class="block-quote">

:memo: _**Note:** <i> Once Fiserv receives the CSS from the client, Fiserv applies these elements to the TransferNow UI._</i> </blockquote>
</div>
</div>
</br>

<div>
    <input type="checkbox" class="collapsible-checkbox" id="section4">
    <label class="label-expand" for="section4">Exit URL</label>
    <div class="content-expand">

<p>Using the DGF, an FI provides Fiserv with an exit URL, so that Fiserv knows where to route a user after TransferNow times out.</p> 

<p>An FI can also pass an exit URL to Fiserv in the session payload. TransferNow first looks for an exit URL in the session payload details, and if present, then this URL takes precedence over the exit URL defined in the DGF. Otherwise, Fiserv uses the exit URL defined in the DGF. </p>

<p>The FI should define the following exit URL: </p>

<div class="card-body">
<ul>
<li>RETURN_URL—Specifies the page to which to return the user when the user’s session times out on the Fiserv side.</li>
</ul>
</div>
</div>
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
    .card-container {
            display: flex;
            justify-content: space-between;
        }
        .card {
            border: 1px solid black;
            border-radius: 8px;
            margin: 5px;
            display: flex;
            flex-direction: column;
        }
    .collapsible-container {
        width: 100%;
    }

    .collapsible-checkbox {
        display: none;
    }

    .label-expand {
        background-color: #777;
        color: white;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        display: block;
          position: relative;
    }
    .label-expand::after{
        content: '+';
        font-size: 22px;
        font-weight: bold;
        position: absolute;
        right: 12px;
        top: 12px;
        padding: 0 20px;
    }
    input:checked + label::after {
        content: '-';
        font-size: 22px;
        right: 14px;
        top: 8px;
        padding: 0 20px;
    }

    .collapsible-checkbox:checked+.label-expand {
        background-color: #555;
    }

    .content-expand {
        padding: 0 18px;
        display: none;
        overflow: hidden;
        background-color: #f1f1f1;
    }

    .collapsible-checkbox:checked+.label-expand+.content-expand {
        display: block;
    }

    .block-quote {
        padding: 1em;
        color: #6a737d;
        border-left: 0.375em solid #40a9ff;
        background: #e6f7ff;
        border-radius: 3px;
    }

    .content-left {
        width: 50%
    }

    .image-otp {
        width: 40%
    }

    .content-body {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
    }

    .image-center {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 70%;
    }
    
    .card-body {
        margin: 20px;
    }
</style>