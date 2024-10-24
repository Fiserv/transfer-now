## Delete Debit Cards

<div class="card-body">
    <ul>
    <li>To delete an existing debit card, go to the Preferences screen.</li>
    </br>
    <img src="/assets/images/Debit-card-preference.png">
    </br>
    <li>Under <strong>My Debit Cards</strong> menu, user can see all the debit cards added.</li>
    <br/>
    <img src="/assets/images/Delete-option.png">
    <p></p>
    <li>Select a debit card that the user wants to delete.</li>
    <li>Click the <b class="confirm-button">Delete Card</b> button to remove the debit card from the list.</li>
    <li>Delete Debit Card screen is displayed.</li>
    <br/>
    <img src="/assets/images/Delete-confirmation.png">
    <p></p>
    <li>Click the <b class="confirm-button">Delete</b> button to delete the selected debit card.</li>
    </br>
    <img src="/assets/images/Delete-success-msg.png">
    </br>
    <li>After successfully deleting the debit card, a popup appears on the screen confirming the deletion.</li>
    </ul>
</div>
<div class="debit-card-button-container">
<div class="debit-card-left-button">
<a href="?path=docs/transfer-debit-card/debit-card-verification.md">Back</a>
</div>
<div class="debit-card-right-button"><a href="?path=docs/transfer-debit-card/edit-debit-card.md">Next</a></div>
</div>
</div>

<style>
    .confirm-button {
        padding: 2px;
        font-weight: bold;
    }
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
</style>