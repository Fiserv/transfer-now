---
tags: [ACH, New User, Returning User, Digital Payments, Account Ownership, Data Validation Check]
---

# Getting Started with Transfer Now

This document provides details on how TransferNow application enables a FI to offer secure inter-institution funds transfer services by automating the authentication of external accounts and debit cards, provides a comprehensive risk management system, and moves fund using the Automated Clearing House (ACH), and other payment networks. Common use cases include:


<div class="card-body">
<ul>
<li>Add, verify, and delete external ACH accounts and debit cards (supported by Visa)</li>
<li>Create, edit, and cancel one-time scheduled and recurring transfers</li>
<li>View all transfer activity</li>
<li>Verify email addresses</li>
<li>View limits and fees</li>
<li>Validate limits</li>
</ul>
</div>


## SSL Log-In

An FI passes users to Fiserv via Secure Sockets Layer (SSL) Secure Messaging. SSL Secure Messaging is a specialized form of authentication that enables a user to authenticate once and gain access to the resources of multiple software systems.

When an FI passes users to Fiserv via SSL Secure Messaging, Fiserv routes them to the TN landing page, which is the Transfer Funds Overview screen.


<center>

![Image](../assets/images/TransferNowOverview.png) <br />

TRANSFER NOW OVERVIEW SCREEN

</center>







Whenever Fiserv receives a user via SSL Secure Messaging, the user’s profile is registered in the Fiserv ePayments database. The profile establishes a unique identifier called <>.


<!-- theme: info -->

> :memo: **Note:** A unique TransferNow user is defined by last name, social security number, and date of birth. All users with matching information for these fields are considered the same user in TransferNow.

When a user is passed to Fiserv with an identifier that already exists in the Fiserv ePayments database, Fiserv treats them as a returning user. If the identifier does not exist, then Fiserv treats them as a new user, and registers the profile in the Fiserv ePayments database.



## Transfer Now Login

**Transfer Now can be deployed in one of the following ways:**

<div class="card-container">
        <div class="card">
            <!-- <img src="../assets/images/SSL.png" alt="ssl"> -->
            <div class="desc">
                <p>User Logging in via the Single Sign-On integration between Fiserv and the client partner (any Financial Institution) using the standard Fiserv ePayments user interface.</p>
            </div>
        </div>
        <div class="card">
            <!-- <img src="../assets/images/API.png" alt="api"> -->
            <div class="desc">
                <p>XML API integration with the respective Financial Institution web pages that support the service.</p>
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
        font-size: 1.5em;
        color: #f60;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
    .centered-image {
        dispaly: flex;
        justify-content: center;
        align-items: center;
        height:100vh;
    }
    .centered-image img {
        width: 70%;
        height: auto;
    }
    .card-container {
            display: flex;
            justify-content: space-between;
        }
        .card {
            width: 48%;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 10px;
            margin: 5px;
            display: flex;
            flex-direction: column;
        }
        .card img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
        .card .desc {
            padding: 10px;
            text-align: left;
        }
</style>
