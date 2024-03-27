## Add Brokerage Accounts 

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

<div class="add-brokerage-button-container">
    <br>
    <div class="add-brokerage-left-button">
      <a href="?path=docs/transfer-via-bank-accounts/delete_accounts.md">Back</a>
    </div>
    <div class="add-brokerage-right-button">
        <a href="?path=docs/transfer-via-bank-accounts/accounts-restrictions.md">Next</a>
    </div>
</div>
<style>
    .add-brokerage-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .add-brokerage-left-button a,
    .add-brokerage-right-button a{
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
    .add-brokerage-left-button a{ 
        left: 0;
    }
    .add-brokerage-right-button a{
        right: 12px;
    }
    .add-brokerage-left-button a:hover,
    .add-brokerage-right-button a:hover {
        color: #f60;
        background-color: white;
        border: 2px solid #f60;
    }
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