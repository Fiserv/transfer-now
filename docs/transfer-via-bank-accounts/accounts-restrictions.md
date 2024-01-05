## Account Restrictions 


TransferNow enables a client to enforce several restrictions on added accounts. These restrictions are: 

<div class="card-body">
    <ul>
        <li>
            <b>External Account Limit</b>
            —Clients can limit the total number of external accounts a user can add 
            to the TransferNow service. If the client does not set a limit, the user can add an unlimited number of accounts. 
        </li>
        <li>
            <b>Suspended Accounts</b>
            —Negative activity such as returns on accounts will result in systematic, 
            account-level suspension. Pre-emptive risk management processes can also manually suspend an account. A TransferNow user can delete a suspended account, but no suspended account can be reregistered until a suspension is removed. 
        </li>
        <li>
            <b>Exception Denied Accounts</b>
            —Exception denials of account registration are levied through manual action by risk management. A user can delete an exception denied account but cannot re-register the account until the denial has been manually overridden by Fiserv ePayments risk management. 
        </li>
        <li>
            <b>Account Usage Limit</b>
            —A client can configure the number of separate users that can add the same external account. The default limit is two. 
        </li>
        <li>
            <b>Profile Usage Limit</b>
            —A client can configure the allowable number of times a single user can add the same account. The default limit is two. 
        </li>
    </ul>
</div> 

<div class="accounts-restrictions-button-container">
<br>
    <div class="accounts-restrictions-left-button">
         <a href="?path=docs/transfer-via-bank-accounts.md">Back</a>
    </div>
</div>
<style>
    .accounts-restrictions-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .accounts-restrictions-left-button a
    {
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
    .accounts-restrictions-left-button a{ 
        left: 0;
    }
    .accounts-restrictions-left-button a:hover 
    {
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