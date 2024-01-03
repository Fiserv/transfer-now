## TN UI Widget 

User can integrate the TransferNow service via the Fiserv ePayments-hosted UI Solution. 

In this solution, Fiserv manages the entire online application experience. 

<object data="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/TN-UI-Widget-Functionality.pdf" type="application/pdf" width="700px" height="700px">
<embed src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/TN-UI-Widget-Functionality.pdf">
        <p> <a href="file:///C:/Users/F8LHG2D/TN/feature-2/transfer-now/assets/images/TN-UI-Widget-Functionality.pdf">TN UI Widget Functionality PDF</a>.</p>
    </embed>
</object>

<html lang="en">

<body>

<div> <embed src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/TN-UI-Widget-Functionality.pdf" width="800px" height="2100px" />
</div>

</body>
</html>

<!-- <a href="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/TN-UI-Widget-Functionality.pdf">TN UI Widget Functionality</a> -->

Click here to use our [TN UI widget](https://qa-ft.onefiserv.net/jsp/backoffice/tnAPI.jsp) . 


<!-- ## See Also 

[TN UI Rendering Options](?path=docs/getting-started/TN-UI-Widget/TN_UI_Rendering_Options.md) 

[TN UI Customization Guide](?path=docs/getting-started/TN-UI-Widget/TN_UI_Customization_Guide.md) -->


<div>Following topics cover additional information that allows a user to know about TN UI Rendering options and Customization Guide.
    <div class="debit-body">
    <div class="debit-container">
        <input type="radio" name="dot" id="one">
        <input type="radio" name="dot" id="two">
        <div class="main-card-debit">
            <div class="cards-debit">
                <div class="card-debit">
                <div class="content-debit">
                    <div class="img-debit">
                        <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/TN_UI_RenderingOptions.png">
                    </div>
                    <div class="details">
                        <div class="name">TN UI Rendering Options</div>
                    </div>
                    <div class="media-icons">
                        <a href="?path=docs/getting-started/TN-UI-Widget/TN_UI_Rendering_Options.md">Click View</a>
                    </div>
                </div>
                </div>
                <div class="card-debit">
                    <div class="content-debit">
                        <div class="img-debit">
                            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/TN_UI_CustomizationGuide.png">
                        </div>
                        <div class="details">
                            <div class="name">TN UI Customization Guide</div>
                        </div>
                        <div class="media-icons">
                            <a href="?path=docs/getting-started/TN-UI-Widget/TN_UI_Customization_Guide.md">Click View</a>
                        </div>
                    </div>
                    </div>
                    <!-- <div class="card-debit">
                        <div class="content-debit">
                            <div class="img-debit">
                                <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/Delete-debit.png">
                            </div>
                            <div class="details">
                                <div class="name">Delete Debit Cards</div>
                            </div>
                            <div class="media-icons">
                                <a href="?path=docs/transfer-debit-card/delete-debit-card.md">Click View</a>
                            </div>
                        </div>
                        </div> -->
            </div> 
            <div class="cards-debit">
                <div class="card-debit">
                <div class="content-debit">
                    <!-- <div class="img-debit">
                        <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/edit-debit.png">
                    </div> -->
                    <!-- <div class="details">
                        <div class="name">Edit Debit Cards</div>
                    </div> -->
                    <!-- <div class="media-icons">
                        <a href="?path=docs/transfer-debit-card/edit-debit-card.md">Click View</a>
                    </div> -->
                </div>
                </div>
            </div>
        </div>
        <!-- <div class="button-debit">
            <label for="one" class="active one"></label>
            <label for="two" class="two"></label>
        </div> -->
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
        width: calc(100% / 2 - 10px);
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