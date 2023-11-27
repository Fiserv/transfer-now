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


## See Also

[Add An Account](?path=docs/transfer-via-bank-accounts/add-an-Account.md)         
[Add Brokerage Accounts ](?path=docs/transfer-via-bank-accounts/add_brokerage.md)   
[Delete Accounts ](?path=docs/transfer-via-bank-accounts/delete_accounts.md)   


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