## Delete Accounts 

From the Preferences screen, the user can choose Delete Account. 

<div class="card-body">
<ul>
<li>Select any account that you wanted to delete from the list.</li>
<li>Click “Delete Account”.</li>
<li>The Delete Account screen prompts the user to confirm that they want to delete the account.</li>
</ul>
</div> 


&nbsp;


<center>

![Image](../../assets/images/add-an-account-preferences.png) <br />


</center>


&nbsp;


<center>

![Image](../../assets/images/myfinxactfreefiaccounts.png) <br />


</center>


<!-- theme: info -->

> :memo: _**Note:** Users can delete an account that is suspended; however, they cannot re-add the account until the suspension has been lifted._</br>
> _Users can delete an account and re-add it. To prevent misuse of the trial deposit process, users can repeat this only once._


<!-- theme: info -->

> :memo: _**Note:** An account with a pending transfer cannot be deleted. The user can either wait until all pending transfers have completed or cancel all pending transfers that have not been released to ACH before attempting to delete the account again._ 


<div class="delete-accounts-button-container">
    <br>
    <div class="delete-accounts-left-button">
        <a href="?path=docs/transfer-via-bank-accounts.md">Back</a>
    </div>
    <div class="delete-accounts-right-button">
        <a href="?path=docs/transfer-via-bank-accounts/add_brokerage.md">Next</a>
    </div>
</div>
<style>
    .delete-accounts-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .delete-accounts-left-button a,
    .delete-accounts-right-button a{
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
    .delete-accounts-left-button a{ 
        left: 0;
    }
    .delete-accounts-right-button a{
        right: 0;
    }
    .delete-accounts-left-button a:hover,
    .delete-accounts-right-button a:hover {
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