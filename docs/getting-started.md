---
tags: [TN UI Widget, Home ID, Automated Clearing House, Accounts, Debit Cards, Money Transfer, Validation, Limits]
---

 

## How to Sign-In to Developer Studio Portal to Access TransferNow Widget 

### Introduction

The purpose of this document is to advise Fiserv partners that plan to use the TransferNow widget for easy money transfer between accounts. 

### Overview

Before utilizing TransferNow UI widget, you must follow the steps to get an access to the Developer Studio. 

You will be assigned a unique partner ID and a home ID (or multiple home IDs, depending on your needs). You may provision multiple customers (users) under a home ID. A user may have more than one Financial Institution (FI), or any other accounts and connection types offered by AllData / Early Warning System (EWS) under their profile. See [AllData® Aggregation](https://qa-developerstudio.fiserv.com/product/AllDataAggregation?branch=develop) for more information.  

To know more about EWS, see [Instant (Risk Database) Verification](https://qa-developerstudio.fiserv.com/product/VerifyNow/docs/?path=docs/verifynow-account-verification-method/instant-verification.md&branch=develop).
 

### Access Developer Studio

To create an account in Developer Studio, you will need the following: 


<div class="card-body">
<ul>
<li>Account information</li>
<li>Valid business e-mail address.</li>
</ul>
</div>


**Step 1: Sign up for Developer Studio**

Request and create a developer account in the Developer Studio. 

After registration, the developer will have an instant access to the shared sandbox Home ID and TransferNow UI Widget. An assigned sandbox Home ID can be requested for dedicated testing purposes. 

 

**Step 2: Using TransferNow UI Widget**

To use and explore TransferNow UI Widget, navigate to [TransferNow UI Widget](?path=docs/getting-started/TN-UI-Widget/TN_Ui_Widget.md) and use the default (Shared) Home ID or create a dedicated sandbox Home ID. 

### TransferNow and Its Use Cases 

TransferNow application enables a FI to offer secure inter-institution funds transfer services by automating the authentication of external accounts and debit cards, provides a comprehensive risk management system, and moves fund using the Automated Clearing House (ACH), and other payment networks. Common use cases include: 



<div class="card-body">
<ul>
<li>Add, verify, and delete external ACH accounts and debit cards (supported by Visa)</li>
<li>Create, edit, and cancel one-time scheduled and recurring transfers</li>
<li>View all transfer activity </li>
<li>Verify email addresses</li>
<li>View limits and fees</li>
<li>Validate limits.</li>
</ul>
</div>

In addition to that, TransferNow implements Responsive Web Design, which optimizes the user experience by accommodating a range of differently sized screens, such as those used for standard mobile phones, for plus-sized mobile phones, and for laptops, desktops, and tablets. See [Responsive Web Design](?path=docs/getting-started/resp-webdesign.md) to know more about its design features. 
 


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

