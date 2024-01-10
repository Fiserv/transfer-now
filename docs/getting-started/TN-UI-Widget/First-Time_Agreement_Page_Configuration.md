## First-Time Agreement Page Configuration

Each new end user accessing the service for the very first time will be presented with a First Time Agreement page, as shown in the following figure. 

&nbsp;

<center>

![Image](../../../assets/images/AgreeDisAgree.png) <br />


</center>

The end user must agree to the terms and conditions detailed in the text of the agreement before being allowed access to the service. The language used in the agreement is always defined by the Client and the actual agreement text page itself can be hosted either on the Fiserv side or on the Client side.  

There are three configuration options available to the Client regarding the behavior of user agreement acceptance: 

<div class="card-body">
<ul>
<li>Fiserv hosts the agreement page and tracks end user agreement acceptance</li>
<li>Client hosts the agreement page and tracks end user agreement acceptance</li>
<li>Fiserv configures a Client specified URL pointing to a Client hosted agreement page that contains only agreement text, and Fiserv tracks end user agreement acceptance.</li>
</ul>
</div> 
 

<!-- theme: info -->

> :memo: _**Note:** The Client preference for this option is to be indicated in the DGF._
<div class="first-time-agreement-button-container">
    <br>
    <div class="first-time-agreement-left-button">
        <a href="?path=docs/getting-started/TN-UI-Widget/TN_UI_Rendering_Options.md">Back</a>
    </div>
</div>
<style>
    .first-time-agreement-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .first-time-agreement-left-button a{
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
    .first-time-agreement-left-button a{ 
        left: 0;
    }
    .digital-certificates-left-button a:hover{
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
