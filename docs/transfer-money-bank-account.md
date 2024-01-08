## Transfer Via Bank Accounts

 <div class="content-body">
          <div class="content-left">
          <p>TransferNow provides the user with access to 23,000 banks, credit unions, and brokerages for which accounts can be added. The user searches for an institution and uses the appropriate data collection screens based on the services available for the selected institution.</p>
          </div>
          <div class="image-otp">
          <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-main-page.png">
          </div>
        </div>
        <div class="transfer-body">
<div class="transfer-container">
    <div class="transfer-card">
        <div class="transfer-img">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-via-bank-trasfer-funds-account.png">
        </div>
        <div class="transfer-content">
            <p>User selects the bank account from which the amount to be debited under “From” dropdown list.</p>
        </div>
    </div>
    <div class="transfer-card">
        <div class="transfer-img">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-via-bank-from-account.png">
        </div>
        <div class="transfer-content">
            <p>User selects the bank account to which the amount to be credited under “To” dropdown list.</p>
        </div>
    </div>
    <div class="transfer-card">
        <div class="transfer-img">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-via-bank-to-account.png">
        </div>
        <div class="transfer-content">
            <p>Enter the amount to be transferred.</p>
        </div>
    </div>
    <div class="transfer-card">
        <div class="transfer-img">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-via-bank-account-frequency.png">
        </div>
        <div class="transfer-content">
            <p style="margin-bottom: 10px;">Set the date when the user wants to initiate the transaction.</p>
            <p>Select the Frequency. To know more about Transfer Funds Frequency, see <a href="?path=docs/transfer-durations.md">Transfer Frequencies / Durations</a></p>
        </div>
    </div>
    <div class="transfer-card">
        <div class="transfer-img">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-via-bank-account-edit-confirm.png">
        </div>
        <div class="transfer-content">
            <p style="margin-bottom: 10px;">Click Confirm to complete the transfer.</p>
        </div>
    </div>
    <div class="transfer-card">
        <div class="transfer-img">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-via-bank-confirmed-account.png">
        </div>
        <div class="transfer-content">
            <p>Transfer confirmation screen is displayed.</p>
        </div>
    </div>
    <div class="transfer-card">
        <div class="transfer-img">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/transfer-via-bank-confirmed-account.png">
        </div>
        <div class="transfer-content">
            <p>All transfers, including debit card transfers are shown on the “Activity” page as shown below.</p>
        </div>
    </div>
</div>
</div>
<blockquote class="block-quote">

:memo: _**Note:** View Limits will display the maximum amount that can be transferred._</blockquote>

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
    .transfer-body{
        background-color: salmon;
    }
    .transfer-container{
        width: 100%;
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .transfer-card{
        width: 300px;
        height: 280px;
        margin: 50px;
        width: calc(100% / 3 - 10px);
        background: white;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.75);
        transition: all 0.4s ease;
    }
    .transfer-card .transfer-img{
        width: 260px;
        height: 260px;
        position: relative;
        z-index: 1;
        top: -50px;
        left: 20px;
        background: #ffffff00;
        border-radius: 12px;
        padding: 5px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.75);
        transition: all 0.4s ease;
    }
    .transfer-card .transfer-img img{
        width: 100%;
        height: 100%;
    }
    .transfer-card .transfer-content{
        width: 100%;
        text-align: center;
        padding: 2px;
        transform: translateY(-150px);
        opacity: 0;
    }
    .transfer-card:hover{
        height: 350px;
    }
    .transfer-card:hover .transfer-content{
        opacity: 1;
        transform: translateY(-40px);
        transition: 0.5s;
    }
    .block-quote {
        padding: 1em;
        color: #6a737d;
        border-left: 0.375em solid #40a9ff;
        background: #e6f7ff;
        border-radius: 3px;
    }
</style>