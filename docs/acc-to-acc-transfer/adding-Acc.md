## Adding an Account

A TransferNow user may add a bank/credit union account or brokerage account as an account eligible for funds transfers. The user adds one account at a time, specifying the account type, account number, and ABA routing number.

Accounts require verification of account ownership, as described in Account Verification. To add a bank/credit union account, the user searches a database of over 23,000 institutions by ABA number.

To add a brokerage institution, the user selects from the following list of supported brokerages:

<div class="container-card">
    <div class="row-card">
    <div class="card-account">
    <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/amer.png"/>
    </div>
    <div class="card-account">
        <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/charles.png"/>
    </div>
    <div class="card-account">
        <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/extrade.png"/>
    </div>
    </div>
    <div class="row-card">
        <div class="card-account">
        <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/fied.png"/>
        </div>
        <div class="card-account">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/mer.png"/>
        </div>
        <div class="card-account">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/morgan.png"/>
        </div>
        </div>
        <div class="row-card">
            <div class="card-account">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/principle.png"/>
            </div>
            <div class="card-account">
                <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/scot.png"/>
            </div>
            <div class="card-account">
                <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/smith.png"/>
            </div>
            </div>
            <div class="single-column">
            <div class="card-account">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/TD.png"/>
            </div>
            </div>
    </div>


## See Also

[Deleting Accounts](?path=docs/acc-to-acc-transfer/delete-Acc.md)   
[Add Restrictions](?path=docs/acc-to-acc-transfer/Manage-Account/acc-restrictions.md)   
[Account Summary Information](?path=docs/acc-to-acc-transfer/Manage-Account/acc-summary.md)   
[Add/Delete Limitations](?path=docs/acc-to-acc-transfer/Manage-Account/add-del-limitations.md)   
[Instant Verification](?path=docs/acc-to-acc-transfer/Account-Verify/Instant-Verify.md)   
[Real Time Verification](?path=docs/fund-transfer/Account-Verify/real-time.md)   
[Trial Deposit Verification](?path=docs/acc-to-acc-transfer/Account-Verify/trial-verify.md)   


<style>

    .container-card {
        margin: 0 auto;
        padding: 20px;
    }

    .row-card {
        display: flex;
        justify-content: left;
        gap: 5%;
        margin:20px 0;
    }

    .card-account {
        flex: 1;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.2s ease-in-out;
    }

    .card-account:hover {
        transform: scale(1.05);
    }

    .card-account img{
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
    }

    .single-column {
        display: flex;
        justify-content: left;
        gap: 5%;
        margin: 20px 0;
    }

    .single-column .card-account {
        flex:1;
        max-width: 30%;
        height: 150px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.2s ease-in-out;
    }
</style>