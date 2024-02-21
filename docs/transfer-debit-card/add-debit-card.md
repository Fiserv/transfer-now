## Add Debit Cards

<div class="card-body">
    <ul>
    <li>In the Create Transfer screen, click Add an account or debit card.</li>
    <li>Add Account or Debit Card screen is displayed.</li>
    <br/>
    <img class="image-center" src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/create-transfer-mobile.png">
    <br/>
    <li>Select Debit Card from the list of options under Account Type.</li>
    </ul>
</div>
<img class="image-center" src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/search-debit-tile.png">
<div class="card-body">
    <ul>
    <li>Enter the debit card number.</li>
    <li>Enter the debit card’s month and year of expiration.</li>
    <li>Enter CVV.</li>
    <li>Click Next.</li>
    <li>Enter the debit card number.</li>
    <li>Verify Debit Card screen is displayed.</li>
    </br>
    <p class="block-quote"> &#128221<i><strong>Note:</strong> Once the debit card is verified, it gets added to the list.</i></p>
    </ul>
    <ul>
    <img class="image-center" src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/add-debit-card.png">
    <br/>
    <li>To know more about Debit card verification, see Debit Card Verification.</li>
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