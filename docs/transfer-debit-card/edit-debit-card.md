## Edit Debit Cards

<div class="card-body">
    <ul>
    <li>Go to the Preferences screen.</li>
    <li>Under <strong>My Debit Cards</strong> menu, user can see all the debit cards added.</li>
    <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/my-debit-card.png">
    <li>Select a debit card that the user wants to edit.</li>
    <li>Click the <button class="confirm-button">Edit</button> button.</li>
    <li><strong>Edit Debit Card</strong> screen is displayed.</li>
    <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/edit-debit-cards.png">
    <li>The user can edit the Nickname on the debit card.</li>
    <li>Click the <button class="confirm-button">Save</button> button to view the edited information.</li>
    </ul>
</div>
<p class="block-quote">Note: If the debit card is expired or a new one, the user can edit the expiry date if the new debit card number is same or if the debit card numbers are different, the user will have to delete and add as a new card.</p>

<div class="debit-card-button-container">
<div class="debit-card-left-button">
<a href="?path=docs/debit-card-transaction.md">Back</a>
</div>
</div>

<style>
    .debit-card-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .debit-card-left-button a{
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
    .debit-card-left-button a:hover{
        color: #f60;
        background-color: white;
        border: 2px solid #f60;
    }
    .block-quote {
        margin-left: 25px;
        padding: 1em;
        color: #6a737d;
        border-left: 0.375em solid #40a9ff;
        background: #e6f7ff;
        border-radius: 3px;
    }
    .confirm-button {
        padding: 2px;
        font-weight:bold;
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