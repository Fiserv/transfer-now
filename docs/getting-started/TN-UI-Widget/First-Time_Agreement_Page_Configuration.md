## First-Time Agreement Page Configuration

Each new end user accessing the service for the very first time will be presented with a First Time Agreement page, as shown in the following figure. 

&nbsp;

<center>

<img src="../../../assets/images/First_Time_Aggreement.png" width="200" height="300"></br>

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
