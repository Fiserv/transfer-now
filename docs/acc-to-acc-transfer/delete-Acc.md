## Deleting Accounts 


<div class="card-body">
<ul>
<li>From the Preferences screen, the user can choose Delete Account.</li>
<li>Select any account that you wanted to delete from the list.</li>
<li>Click “Delete Account”.</li>
<li>The Delete Account screen prompts the user to confirm that they want to delete the account.</li>
</ul>
</div>


<!-- theme: info -->

> :memo: **Note:** Users can delete an account that is suspended; however, they cannot re-add the account until the suspension has been lifted.

<center>

![Image](../../assets/images/Delete_An_Account.png) <br />

DELETE AN ACCOUNT

</center>

## Pending Transfers 

An account with a pending transfer cannot be deleted. The user can either wait until all pending 
transfers have completed or cancel all pending transfers that have not been released to ACH before 
attempting to delete the account again. 


## See Also

[Deleting Accounts](?path=docs/acc-to-acc-transfer/delete-Acc.md)   
[Add Restrictions](?path=docs/acc-to-acc-transfer/Manage-Account/acc-restrictions.md)   
[Account Summary Information](?path=docs/acc-to-acc-transfer/Manage-Account/acc-summary.md)   
[Add/Delete Limitations](?path=docs/acc-to-acc-transfer/Manage-Account/add-del-limitations.md)   
[Instant Verification](?path=docs/acc-to-acc-transfer/Account-Verify/Instant-Verify.md)   
[Real Time Verification](?path=docs/fund-transfer/Account-Verify/real-time.md)   
[Trial Deposit Verification](?path=docs/acc-to-acc-transfer/Account-Verify/trial-verify.md)  




<html>
  <table style="width: 100%;">
            <thead>
                <tr>
                    <th> User profile parameter</th>
                    <th> Description, Usage Restriction, and error flow </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">INSTITUTION_ID </br>Client will pass to Fiserv? YES</td>
                    <td>Fiserv assigned unique persistent Client identifier (also referred to as the 
Client Home ID) Usage Restrictions Is a required payload parameter Associated value must be numeric and 8 digits in length</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for 
more information):
Fiserv will return an SS28 payload error if the parameter is not present in payload or the associated value length equals 0
Fiserv will display an application SS42 error page if the associated value length is > 0 but < 8, or > 8</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">CE_APPLICATION_CODE</br>Client will pass to Fiserv? _____</td>
                    <td>Client indicates if end user is accessing TransferNow or another Fiserv product.</br>Usage Restrictions
If client sends TN or any other value, end user would be directed to the TransferNow application.</br>If this field is missing, end user would be directed to the TransferNow application. </td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information): </br>N/A</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">USER_FI_NUMBER</br>Client will pass to Fiserv? YES</td>
                    <td>Client assigned unique persistent end user identifier; end user can have only one active profile per Fiserv service </br>Usage Restrictions Is a required payload parameter Associated value should be alphanumeric, 3 to 20 characters in length. It 
can include dashes but not spaces</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for 
more information):</br>Fiserv will return an SS30 payload error if the parameter is not present in payload or the associated value length equals 0</td>
                </tr>
            </tbody>
        </table>
</html>





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


