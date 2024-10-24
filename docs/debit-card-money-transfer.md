## Transfer Via Debit Cards

In addition to adding user's bank account, TransferNow allows users to add their debit cards to transfer money.

<div class="card-body">
    <ul>
    <li>User can select “From” and “To” debit card information from the list that are already added.</li>
    <img class="image-center" src="/assets/images/create-transfer-mobile.png">
    <li>Enter the amount to be transferred.</li>
    <p class="block-quote"> &#128221 <i> <strong>Note:</strong> View Limits will display the maximum amount that can be transferred.</i></p>
    </ul>
</div>
<div class="card-body">
    <ul>
    <li>Set the date when the user wants to initiate the transaction.</li>
    <li>Select the Frequency. To know more about Frequency, see <a href="?path=docs/transfer-durations.md">Transfer Frequencies/Duration.</a></li>
    <li>Click the <button class="confirm-button">Review</button> button and review the page.</li>
    <img class="image-center" src="/assets/images/review.png">
    <li>The transfer detail is displayed on the screen to allow the user to review and confirm.</li>
    <li>Click the <button class="confirm-button">Confirm</button> button to complete the transfer.</li>
    <img class="image-center" src="/assets/images/confirmation.png">
    <li>Transfer confirmation screen is displayed.</li>
    <li>All transfers, including debit card transfers are shown on the <strong>Activity</strong> page as shown below.</li>
    </ul>
</div>
<div>Following topics cover additional information that allows a user to manage and transfer money from debit cards.
    <div class="debit-body">
    <div class="debit-container">
        <input type="radio" name="dot" id="one">
        <input type="radio" name="dot" id="two">
        <div class="main-card-debit">
            <div class="cards-debit">
                <div class="card-debit">
                <div class="content-debit">
                    <div class="img-debit">
                        <img src="/assets/images/add-debit.png" alt="add-debit">
                    </div>
                    <div class="details">
                        <div class="name">Add Debit Cards</div>
                    </div>
                    <div class="media-icons">
                        <a href="?path=docs/transfer-debit-card/add-debit-card.md">Click View</a>
                    </div>
                </div>
                </div>
                <div class="card-debit">
                    <div class="content-debit">
                        <div class="img-debit">
                            <img src="/assets/images/verify.png">
                        </div>
                        <div class="details">
                            <div class="name">Debit Card Verification</div>
                        </div>
                        <div class="media-icons">
                            <a href="../transfer-debit-card/debit-card-verification.md">Click View</a>
                        </div>
                    </div>
                    </div>
                    <div class="card-debit">
                        <div class="content-debit">
                            <div class="img-debit">
                                <img src="/assets/images/Delete-debit.png">
                            </div>
                            <div class="details">
                                <div class="name">Delete Debit Cards</div>
                            </div>
                            <div class="media-icons">
                                <a href="../transfer-debit-card/delete-debit-card.md">Click View</a>
                            </div>
                        </div>
                        </div>
            </div>
            <div class="cards-debit">
                <div class="card-debit">
                <div class="content-debit">
                    <div class="img-debit">
                        <img src="/assets/images/edit-debit.png">
                    </div>
                    <div class="details">
                        <div class="name">Edit Debit Cards</div>
                    </div>
                    <div class="media-icons">
                        <a href="../transfer-debit-card/edit-debit-card.md">Click View</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="button-debit">
            <label for="one" class="active one"></label>
            <label for="two" class="two"></label>
        </div>
    </div>
</div>
</div>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    .debit-body {
        display: flex;
        min-height: 50vh;
        align-items: center;
        justify-content: center;
        background: #6a737d;
        background-position: center;
        background-size: cover;
        position: relative;
    }
    .debit-body::before {
        z-index: 777;
        content: '';
        position: absolute;
        background: #f1f1f1;
        width: 100%;
        height: 100%;
    }
    ::selection {
        background: #ff676d;
        color: white;
    }
    .debit-container{
        max-width: 950px;
        width: 100%;
        overflow: hidden;
        padding: 80px 0;
        z-index: 999;
    }
    .debit-container .main-card-debit {
        display: flex;
        justify-content: space-evenly;
        width: 200%;
        transition: 1s;
    }
    #two:checked~.main-card-debit {
        margin-left: -100%;
    }
    .debit-container .main-card-debit .cards-debit {
        width: calc(100% / 2 - 10px);
        display: flex;
        flex-wrap: wrap;
        margin: 0 20px;
        justify-content: space-between;
    }
    .main-card-debit .cards-debit .card-debit {
        width: calc(100% / 3 - 10px);
        background: white;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.75);
        transition: all 0.4s ease;
    }
    .main-card-debit .cards-debit .card-debit:hover {
        transform: translateY(-15px);
    }
    .cards-debit .card-debit .content-debit {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .cards-debit .card-debit .content-debit .img-debit {
        height: 130px;
        width: 130px;
        margin-bottom: 14px;
    }
    .card-debit .content-debit .img-debit img {
        height: 100%;
        width: 100%;
        border: 3px solid #f1f1f1;
        border-radius: 15%;
        object-fit: cover;
    }
    .card-debit .content-debit .name {
        font-size: 20px;
        font-weight: 500;
    }
    .card-debit .content-debit .desc {
        font-size: 20px;
        color: #ff676d;
    }
    .card-debit .content-debit .media-icons {
        margin-top: 10px;
        display: flex;
    }
    .media-icons a {
        text-align: center;
        line-height: 33px;
        height: 35px;
        width: 100px;
        margin: 0 4px;
        font-size: 18px;
        color: white;
        border-radius: 5%;
        text-decoration: none;
        border: 2px solid transparent;
        background: #f60;
        transition: all 0.3s ease;
    }
    .media-icons a:hover {
        color: #f60;
        background-color: white;
        border-color: #f60;
    }
    .debit-container .button-debit {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px;
    }
    .button-debit label {
        height: 15px;
        width: 15px;
        border-radius: 20px;
        background: #6a737d;
        margin: 0 4px;
        cursor: pointer;
        transition: all 0.5s ease;
    }
    .button-debit label.active {
        width: 35px;    
    }
    #one:checked~.button-debit .one {
        width: 35px;
    }
    #one:checked~.button-debit .two {
        width: 35px;
    }
    #two:checked~.button-debit .one {
        width: 15px;
    }
    #two:checked~.button-debit .two {
        width: 15px;
    }
    input[type="radio"]{
        display: none;
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