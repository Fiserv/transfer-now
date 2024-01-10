## TransferNow Integration Guide

<div style="margin:25px; margin-left:0px;">The following topics cover information that allows a user to secure transaction from one account to another.
    <div class="debit-body-list">
    <div class="debit-container-list">
        <div class="main-card-debit-list">
            <div class="cards-debit-list">
                <div class="card-debit-list">
                <div class="content-debit-list">
                <div class="img-debit">
                        <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/ssl-auth-transfernow.png" alt="add-debit">
                    </div>
                    <div class="ssl-auth-main-page">
                    <div class="details-list">
                        <div class="name-list">SSL Authentication</div>
                    </div>
                    <div class="media-icons-list">
                        <a href="?path=docs/getting-started/TN-Integration-Guide/SSL-Authentication.md">Click View</a>
                    </div>
                    </div>
                </div>
                </div>
                <div class="card-debit-list">
                    <div class="content-debit-list">
                    <div class="img-debit">
                        <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/ssl_auth.png" alt="add-debit">
                    </div>
                    <div class="ssl-auth-main-page">
                        <div class="details-list">
                            <div class="name-list">SSO Payload</div>
                        </div>
                        <div class="media-icons-list">
                            <a href="?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/payload-secure-msg.md">Click View</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="card-debit-list">
                        <div class="content-debit-list">
                        <div class="img-debit">
                        <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/ssl-mobile-transfernow.png" alt="add-debit">
                    </div>
                    <div class="ssl-auth-main-page">
                            <div class="details-list">
                                <div class="name-list">SSO for Mobile</div>
                            </div>
                            <div class="media-icons-list">
                            <a href="?path=docs/getting-started/TN-Integration-Guide/SSO-For-Mobile.md">Click View</a>
                            </div>
                            </div>
                        </div>
                        </div>
            </div>
            <div class="cards-debit-2-list">
                <div class="card-debit-list">
                <div class="content-debit-list">
                <div class="img-debit">
                        <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/brokerage-TN-main.png" alt="add-debit">
                    </div>
                    <div class="details-list">
                        <div class="name-list">Add Brokerage Accounts</div>
                    </div>
                    <div class="media-icons-list">
                        <a href="?path=docs/transfer-via-bank-accounts/add_brokerage.md">Click View</a>
                    </div>
                </div>
                </div>
                <div class="card-debit-list">
                    <div class="content-debit-list">
                    <div class="img-debit">
                        <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/secured-TN-main.png" alt="add-debit">
                    </div>
                    <div class="details-list">
                        <div class="name-list">
                            Account Restrictions.
                        </div>
                    </div>
                        <div class="media-icons-list">
                            <a href="?path=docs/transfer-via-bank-accounts/accounts-restrictions.md">
                            Click View
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<style>
    .ssl-auth-main-page{
        margin-top: 10px;
        padding: 8px;
    }
    #bullets {
    margin: 0 0 30px 0;
    position: relative;
    bottom: 39px;
    text-align: center;
    padding: 17px;
    border-bottom: 1px solid #8080803d;
    }
    #bullets label {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: #ccc;
        margin: 0 10px;
    }
    #slide1:checked~#bullets label:nth-child(1),
    #slide2:checked~#bullets label:nth-child(2),
    #slide3:checked~#bullets label:nth-child(3),
    #slide4:checked~#bullets label:nth-child(4) {
        background: #444;
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
        width: calc(200% / 1 - 10px);
        display: flex;
        flex-wrap: wrap;
        margin: 0 10px;
        justify-content: space-between;
    }
    .main-card-debit .cards-debit .card-debit {
        width: calc(300% / 1 - 10px);
        background: white;
        border-radius: 5px;
        padding: 10px;
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
    .debit-body-list {
        display: flex;
        min-height: 50vh;
        align-items: center;
        justify-content: center;
        background-position: center;
        background-size: cover;
        position: relative;
    }
    .debit-body-list::before {
        z-index: 777;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .debit-container-list{
        max-width: 950px;
        width: 100%;
        overflow: hidden;
        padding: 80px 0 20px 0;
        z-index: 999;
    }
    .debit-container-list .main-card-debit-list {
        display: flex;
        justify-content: space-evenly;
        width: 200%;
        transition: 1s;
    }
    /* #slidetwo:checked~.main-card-debit-list {
        margin-left: -100%;
    } */
    .debit-container-list .main-card-debit-list .cards-debit-list {
        width: calc(100% / 2 - 10px);
        display: flex;
        flex-wrap: wrap;
        margin: 0 20px;
        justify-content: space-between;
    }
    .debit-container-list .main-card-debit-list .cards-debit-2-list {
        width: calc(100% / 2 - 10px);
        display: flex;
        flex-wrap: wrap;
        margin: 0 20px;
    }
    .main-card-debit-list .cards-debit-2-list .card-debit-list {
        width: calc(70% / 2 - 10px);
        background: white;
        border-radius: 12px;
        padding: 30px;
        height: 100%;
        margin: 10px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.75);
        transition: all 0.4s ease;
    }
    .main-card-debit-list .cards-debit-list .card-debit-list {
        width: calc(100% / 3 - 10px);
        background: white;
        border-radius: 12px;
        padding: 30px;
        height: 90%;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.75);
        transition: all 0.4s ease;
    }
    /* .main-card-debit-list .cards-debit-list .card-debit-list:hover {
        transform: translateY(-15px);
    } */
    .cards-debit-list .card-debit-list .content-debit-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .cards-debit-list .card-debit-list .content-debit-list .img-debit-list {
        height: 200px;
        width: 130px;
        margin-bottom: 14px;
    }
    .card-debit-list .content-debit-list .img-debit-list img {
        height: 100%;
        width: 100%;
        border: 3px solid #f1f1f1;
        border-radius: 15%;
        object-fit: cover;
    }
    .card-debit-list .content-debit-list .name-list {
        font-size: 18px;
    }
    .card-debit-list .content-debit-list .desc-list {
        font-size: 20px;
        color: #ff676d;
    }
    .card-debit-list .content-debit-list .media-icons-list {
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }
    .media-icons-list a {
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
    .media-icons-list a:hover {
        color: #f60;
        background-color: white;
        border-color: #f60;
    }
    .debit-container-list .button-debit-list {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px;
    }
    .button-debit-list label {
        height: 15px;
        width: 15px;
        border-radius: 20px;
        background: #6a737d;
        margin: 0 4px;
        cursor: pointer;
        transition: all 0.5s ease;
    }
   </style>