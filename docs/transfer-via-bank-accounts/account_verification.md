## Account Verification

Adding an account require verification of account ownership.  
TransferNow verifies a user’s ownership of an external account using three types of account verification:     

<div class="card-body">
<ul>
<li>Instant</li>
<li>Real-time</li>
<li>Trial-deposit</li>
</ul>
</div>
  

<!-- theme: info -->

> :memo: _**Note:** Clients have the option to allow Outbound Transfers (Transfer to a third-party account) to unverified external accounts, subject to a client-specified dollar limit. By default, verification is ON._

The detailed information about account verification and the process flow can be seen in [VerifyNow - Account Verification Methods](https://qa-developerstudio.fiserv.com/product/VerifyNow/docs/?path=docs/verifynow-account-verification-method.md&branch=develop). 


<div class="account-verification-button-container">
    <br>
    <div class="account-verification-left-button">
      <a href="?path=docs/transfer-via-bank-accounts/transfer-via-bank-accounts.md">Back</a>
    </div>
    <div class="account-verification-right-button">
        <a href="?path=docs/transfer-via-bank-accounts/delete_accounts.md">Next</a>
    </div>
</div>
<style>
    .account-verification-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .account-verification-left-button a,
    .account-verification-right-button a{
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
    .account-verification-left-button a{ 
        left: 0;
    }
    .account-verification-right-button a{
        right: 12px;
    }
    .account-verification-left-button a:hover,
    .account-verification-right-button a:hover {
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