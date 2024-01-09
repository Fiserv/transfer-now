## Add Debit Cards

<div class="card-body">
    <ul>
    <li>User can select Add an account or debit card option to add a new debit card.</li>
    <img class="image-center" src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/create-transfer-mobile.png">
    <li>If RTVA is enabled, then the user is navigated to RTVA FI Search Page.</li>
    <p class="block-quote"> &#128221<i><strong>Note:</strong> If RTVA is not enabled, then the user is navigated to Add Account or Debit Card screen.</i></p>
    </ul>
</div>
<img class="image-center" src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/search-debit-tile.png">
<div class="card-body">
    <ul>
    <li>Select Add Visa Debit Card tile.</li>
    <li><strong>Add Account or Debit Card</strong> screen is displayed.</li>
    <img class="image-center" src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/add-debit-card.png">
    <li>Select Debit Card from the drop-down list under Account Type option.</li>
    <p class="block-quote"> &#128221<i><strong>Note:</strong> Account Nickname is optional.</i></p>
    <li>Select the debit card expiration month and year from the drop-down list under Expiration option.</li>
    <li>Add the CVV.</li>
    <p class="block-quote"> &#128221<i><strong>Note:</strong> Your Address will be displayed by default using the address sent in the SSO, and is used for validation and the user will not be allowed to edit the address in TN. The user will have to change the address in the financial institution’s online banking.</i></p>
    <li>Click the <b class="confirm-button">Next</b> button to finish adding a debit card.</li>
    </ul>
</div>
<div class="debit-card-button-container">
<div class="debit-card-left-button">
<a href="?path=docs/debit-card-transaction.md">Back</a>
</div>
<div class="debit-card-right-button"><a href="?path=docs/transfer-debit-card/debit-card-verification.md">Next</a></div>
</div>
<style>
    .debit-card-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .debit-card-left-button a,
    .debit-card-right-button a{
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
    .debit-card-left-button a{ 
        left: 0;
    }
    .debit-card-right-button a{
        right: 0;
    }
    .debit-card-left-button a:hover,
    .debit-card-right-button a:hover {
        color: #f60;
        background-color: white;
        border: 2px solid #f60;
    }
    .block-quote {
        padding: 1em;
        color: #6a737d;
        border-left: 0.375em solid #40a9ff;
        background: #e6f7ff;
        border-radius: 3px;
    }
    .image-center {
      display: block;
      width: 70%;
      margin: 5px auto;
    }
    .confirm-button {
        padding: 2px;
        font-weight: bold;
    }
    .card-body {
        margin: 20px;
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