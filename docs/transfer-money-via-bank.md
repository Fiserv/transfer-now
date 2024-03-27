## Transfer Via Bank Accounts

 <div class="content-body">
          <div class="content-left">
          <p>TransferNow provides the user with access to 23,000 banks, credit unions, and brokerages for which accounts can be added. The user searches for an institution and uses the appropriate data collection screens based on the services available for the selected institution.</p>
          </div>
          <div class="image-otp">
          <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-main-page.png">
          </div>
</div>
<div class="content-body-steps">
    <div class="content-left">
        <div class="debit-body">
    <div class="debit-container">
        <input type="radio" name="dot" id="one">
        <input type="radio" name="dot" id="two">
        <input type="radio" name="dot" id="three">
        <div class="main-card-debit">
            <div class="cards-debit">
                <div class="card-debit">
                    <div class="content-debit">
                        <div class="img-debit">
                            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-via-bank-trasfer-funds-account.png"
                                alt="add-debit">
                        </div>
                    </div>
                </div>
            </div>
            <div class="cards-debit">
            <div class="card-debit">
                <div class="content-debit">
                    <div class="img-debit">
                        <img
                            src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-via-bank-from-account.png">
                    </div>
                </div>
            </div>
            </div>
            <div class="cards-debit">
            <div class="card-debit">
                <div class="content-debit">
                    <div class="img-debit">
                        <img
                            src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-via-bank-to-account.png">
                    </div>
                </div>
            </div>
            </div>
            <div class="cards-debit">
                <div class="card-debit">
                    <div class="content-debit">
                        <div class="img-debit">
                            <img
                                src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-via-bank-account-frequency.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="button-debit">
            <label for="one" class="active one"></label>
            <label for="two" class="two"></label>
            <label for="three" class="three"></label>
        </div>
    </div>
</div>
</div>
<div class="image-otp">
<div class="card-body">
        <ul>
            <li>User selects the bank account from which the amount to be debited under “From” dropdown list.</li>
            <li>User selects the bank account to which the amount to be credited under “To” dropdown list.</li>
            <li>Enter the amount to be transferred.</li>
            <li>Set the date when the user wants to initiate the transaction.</li>
            <li>Select the Frequency. To know more about Transfer Funds Frequency, see <a href="?path=docs/transfer-durations.md">Transfer Frequencies / Durations</a></li>
            <li>Click Confirm to complete the transfer.</li>
            <li>Transfer confirmation screen is displayed.</li>
            <li>All transfers, including debit card transfers are shown on the “Activity” page as shown below.</li>
        </ul>
        </div>
    </div>
</div>

<style>
.content-left {
        width: 50%
    }

    .image-otp {
        width: 40%
    }

    .content-body {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
    }
    .content-body-steps{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        background-color: #f1f1f1;
    }
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
        justify-content: flex-end;
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
        width: 400%;
        transition: 1s;
    }
    #two:checked~.main-card-debit {
        margin-left: -100%;
    }
    .debit-container .main-card-debit .cards-debit {
        width: calc(100% / 1 - 10px);
        display: flex;
        flex-wrap: wrap;
        margin: 0 20px;
        justify-content: space-between;
    }
    .main-card-debit .cards-debit .card-debit {
        width: calc(100% / 1 - 10px);
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
        /* height: 130px; */
        width: 100%;
        margin-bottom: 14px;
    }
    .card-debit .content-debit .img-debit img {
        height: 100%;
        width: 100%;
        border: 3px solid #f1f1f1;
        /* border-radius: 15%; */
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
    #one:checked~.button-debit .three {
        width: 35px;
    }
    #two:checked~.button-debit .one {
        width: 15px;
    }
    #two:checked~.button-debit .two {
        width: 15px;
    }
    #two:checked~.button-debit .three {
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
        margin: 10px 0;
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
