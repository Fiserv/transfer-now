## Add an Account 

A TransferNow user may add a bank/credit union account or brokerage account as an account eligible for funds transfers.  

<div class="card-body">
<ul>
<li>To add an external account, user can select Add a New Account option. </li>
</ul>
</div> 


<center>

![Image](../../assets/images/add-an-account-create-transfer.png) <br />


</center>

<div class="card-body">
<ul>
<li>Add External Account screen is displayed. </li>
</ul>
</div> 


<center>

![Image](../../assets/images/add-account-debit-card.png) <br />


</center>


<div class="card-body">
    <ul>
        <li>
            The user adds one account at a time, specifying the account type, account number, and ABA routing number.
        </li>
        <li>
            Click Next.
        </li>
        <li>
            Verify your external bank account screen appears. See 
            <a href="../VerifyNow/?path=docs/verifynow-account-verification-method.md&branch=develop">
            VerifyNow - Account Verification Methods 
            </a> 
            for more information on the account verification. 
        </li>
    </ul>
</div> 


<center>

![Image](../../assets/images/verify-external-account.png) <br />


</center>


The list of accounts added under any user can be viewed under the Preferences Screen. 


<center>

![Image](../../assets/images/add-an-account-preferences.png) <br />


</center>


<!-- theme: info -->

> :memo: _**Note:** To know more about adding a brokerage accounts,_ see [Adding Brokerage Accounts](?path=docs/transfer-via-bank-accounts/add_brokerage.md)


<div class="add-an-account-button-container">
    <br>
    <div class="add-an-account-left-button">
        <a href="?path=docs/transfer-via-bank-accounts/transfer-via-bank-accounts.md">Back</a>
    </div>
    <div class="add-an-account-right-button">
        <a href="?path=docs/transfer-via-bank-accounts/account_verification.md">Next</a>
    </div>
</div>
<style>
    .add-an-account-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .add-an-account-left-button a,
    .add-an-account-right-button a{
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
    .add-an-account-left-button a{ 
        left: 0;
    }
    .add-an-account-right-button a{
        right: 12px;
    }
    .add-an-account-left-button a:hover,
    .add-an-account-right-button a:hover {
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
