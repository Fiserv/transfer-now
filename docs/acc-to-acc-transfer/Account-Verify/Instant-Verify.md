# Instant Verification

<!-- theme: info -->

> :memo: _**Note:** Instant account verification requires the financial institution client to have a contractual relationship established with Early Warning (EWS) for the Account Ownership Authentication service. Additional data sources will be added to the service in the future._

&nbsp;

EWS houses data contributed by financial institutions with data elements including account holder names, address, tax ID, and additional elements leveraged to determine ownership of the account. Additionally, EWS provides a status of the account such as open/close, ability to accept debits, type of account, and risk indicators. Fiserv uses this response data to instantly decision the account as Approved, Denied, or Inconclusive. Inconclusive accounts are eligible for other verification methods.

Instant Verification process are as follows:


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
<li>Once the user adds the account, TransferNow checks validates the ABA routing number in-session.</li>
<li>Once the user submits the routing and account number, TransferNow interacts with the EWS service and decides the account.</li>
<li>If approved, the Verification Complete screen is displayed, and the user can immediately begin initiating transfers to/from the account.</li>  
<li>If denied, the user is presented a message the account cannot be added and to try another account.</li>  
<li>If the decision is Inconclusive, the user is directed either to real-time verification or trial deposit verification.</li>
</ul>
</div>

&nbsp;

<center>

![image](../../../assets/images/Instant_Verification.png)

</center>

&nbsp;


[Click here](https://qa-developerstudio.fiserv.com/product/VerifyNow?branch=develop) to know more about account verification and acess VerifyNow APIs


<iframe src="http://localhost:4200/" target="_self" title="description"></iframe>

&nbsp;

## See Also
[Adding an Account](?path=docs/acc-to-acc-transfer/adding-Acc.md)<br/>
[Add Restrictions](?path=docs/acc-to-acc-transfer/Manage-Account/acc-restrictions.md)<br/>
[Account Summary Information](?path=docs/acc-to-acc-transfer/Manage-Account/acc-summary.md)<br/>
[Add/Delete Limitations](?path=docs/acc-to-acc-transfer/Manage-Account/add-del-limitations.md)<br/>
[Real Time Verification](?path=docs/acc-to-acc-transfer/Account-Verify/real-time.md)<br/>
[Trail Deposit Verification](?path=docs/acc-to-acc-transfer/Account-Verify/trial-verify.md)









  