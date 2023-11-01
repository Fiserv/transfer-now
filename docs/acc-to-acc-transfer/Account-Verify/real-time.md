# Real Time Verification

Real-time account verification - also known as “online credential verification” - leverages the Fiserv AllData Aggregation Service within the verification flow.

If an account is eligible for real-time account verification, TransferNow will direct the user to the external financial institution's hosted log-in site or prompt the user to enter their user ID and password for within the TransferNow user experience, depending on the endpoint's method of authentication. Once authentication is complete, TransferNow leverages the accountholder name(s) and account number and TransferNow user profile data to verify the account in real-time. 

 &nbsp;

<!-- theme: info -->

> :memo: _**Note:** For security and privacy considerations, Fiserv never stores user ID and password data._

 &nbsp;


Real-time account verification can fail for the following reasons:
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
<li>The user provided incorrect login credentials after multiple attempts, fails the external financial institution's MFA, or otherwise is unable to authenticate.</li>

<li>TransferNow was able to log onto the banking web site, but the information on the web site did not match what the user entered.</li>

<li>The banking web site is unavailable, or other temporary connectivity disruptions.</li>
</ul>
</div>

 &nbsp;


If real-time account verification fails, the user is prompted to use the trial deposit verification method.

 &nbsp;

<!-- theme: info -->

> :memo: _**Note:** Clients can choose not to use real-time account verification to verify the user's ownership of the external account._

 &nbsp;

 TransferNow supports thousands of financial institutions for real-time verification. However, it is not possible for TransferNow to support real-time account verification for all institutions. TransferNow checks the ABA number of the external account to verify that it is a supported financial institution before offering real-time account verification as an option.

If real-time account verification is not available, then the user's account is verified using trial deposit verification.

 &nbsp;
<center>

![image](../../../assets/images/RealTimeVerification.png)<br/>
ACCOUNT VERIFICATION SCREEN
</center>

&nbsp;

[Click here]() to know more about account verification and access VerifyNow APIs


## See Also
[Adding an Account](?path=docs/acc-to-acc-transfer/adding-Acc.md)<br/>
[Add Restrictions](?path=docs/acc-to-acc-transfer/Manage-Account/acc-restrictions.md)<br/>
[Account Summary Information](?path=docs/acc-to-acc-transfer/Manage-Account/acc-summary.md)<br/>
[Add/Delete Limitations](?path=docs/acc-to-acc-transfer/Manage-Account/add-del-limitations.md)<br/>
[Instant Verification](?path=docs/acc-to-acc-transfer/Account-Verify/Instant-Verify.md)<br/>
[Trail Deposit Verification](?path=docs/acc-to-acc-transfer/Account-Verify/trial-verify.md)
