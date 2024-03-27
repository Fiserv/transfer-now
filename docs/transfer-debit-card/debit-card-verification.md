## Debit Card Verification

TransferNow verifies a user’s ownership of an external debit card using two below methods: 

<div class="card-body">
<ul>
    <li>Address Verification and CVV validation.</li>
    <li>Real-time Trial Deposits on the Debit card.</li>
    <div style="margin-left:-20px" class="card-body">Follow the user instructions shown in the Verify Debit Card screen</div>
    </br>
    <img class="image-center" src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/Debit-card-verify-depo.png">
    </br>
    <li>Enter two small deposits and click Verify Now.</li>
    </br>
    <p class="block-quote"> &#128221<i><strong>Note:</strong> Once the debit card is verified, it gets added to the list.</i></p>
    <li>Debit Card Verified screen is displayed</li>
    </br>
    <img class="image-center" src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/Debit-card-verified.png">
    <li>Click OK to complete the Debit Card Verification.</li>
    </ul>
    </div>
<div class="debit-card-button-container">
<div class="debit-card-left-button">
<a href="?path=docs/transfer-debit-card/add-debit-card.md">Back</a>
</div>
<div class="debit-card-right-button"><a href="?path=docs/transfer-debit-card/delete-debit-card.md">Next</a></div>
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
    .block-quote {
        padding: 1em;
        color: #6a737d;
        border-left: 0.375em solid #40a9ff;
        background: #e6f7ff;
        border-radius: 3px;
    }
</style>



