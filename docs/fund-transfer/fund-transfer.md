## Fund Transfer Services

After adding one or more accounts, the TransferNow user can set up one-time transfers and recurring transfers to move funds to and from the account(s). 

Users can create one-time and recurring transfers and can schedule them for standard (three day) or next-day delivery. Users can also create one-time transfers for instant delivery through use of real-time connectivity offered by the NOW Network.

Users can edit transfers that have not been sent to ACH.  

For account transfers, TN uses the Automated Clearing House (ACH) network to process electronic transactions.  

<div class="card-body">
    <ul>
    <li>TN can process transfers returned for reasons such as non-sufficient funds and invalid account numbers.</li>
    <li>TN automatically suspends user accounts based on certain return transactions from ACH and can enforce suspensions on an account and user level.</li>
    </ul>
</div>

### ACH Processing

TN uses the Automated Clearing House (ACH) network to process electronic transactions. TN follows the standard ACH procedure: 

<div class="card-body">
    <ul>
    <li>The TN end-user initiates the process by providing instructions for an electronic transaction.</li>
    <li>TN sends all transaction instructions in a batch file to an Originating Depository Financial Institution (ODFI).</li>
    <li>The ODFI forwards the information to the ACH operator.</li>
    <li>Finally, the ACH Operator sends the information to the Receiving Depository Financial Institution (RDFI).</li>
    </ul>
</div>

A complete money transfer comprises two transactions: a debit transaction to withdraw money from the source account and a credit transaction to deposit money into the destination account. The transfer is complete when both transactions have processed successfully. When an RDFI cannot process a transaction, due to various reasons, the RDFI issues a return to the ODFI.

TN supports two ACH transaction methods:

<div class="card-body">
    <ul>
    <li>Good Funds Model (GFM)</li>
    <li>Next Day Transfers (NDT)</li>
    </ul>
</div>

A transaction processed via the GFM has less risk associated with it, because TN waits until the debit transaction completes successfully before initiating the credit transaction. On the other hand, for a NDT transaction, TN initiates both the credit and the debit transaction at the same time.

![ACH](../../assets/images/ACH.png)


<!-- theme: info -->

> :memo: **Note:** Users can delete an account that is suspended; however, they cannot re-add the account until the suspension has been lifted.


<div class="content-body">
<div class="content-left">
<h1>One-Time Transfer</h1>
<p>A one-time transfer requires the following information.</p>
</div>
<div class="image-otp">
<img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/one-time.png">
</div>
</div>

<div class="collapsible-container">
<div>
    <input type="checkbox" class="collapsible-checkbox" id="section1">
    <label class="label-expand" for="section1">One-Time Transfer</label>
    <div class="content-expand">
        <p>
            A one-time transfer requires the following information.
        </p>
    </div>
    </div>
    </br>
    <div>
    <input type="checkbox" class="collapsible-checkbox" id="section2">
    <label class="label-expand" for="section2">Recurring Transfers</label>
    <div class="content-expand">
        <p>
            Recurring transfers require the following information.
        </p>
        <p class="block-quote">Note: The Instant Transfer option is not applicable for recurring transfers.</p>
    </div>
    </div>
    </br>
    <div>
    <input type="checkbox" class="collapsible-checkbox" id="section3">
    <label class="label-expand" for="section3">On-Screen User Messaging</label>
    <div class="content-expand">
        <p>If a user sets up a Scheduled Recurring Transfer with a transfer date that falls on a weekend or a holiday, they are informed that:</p> 
        <p>“A send date of one or more transfers may fall on a weekend, bank holiday or at the end of a month with less than 31 days. We will reschedule these transfers for the business day”. 
        </p>
        <p class="block-quote">Note: The previous/next day transfer will be adjusted based on the Financial Institutions choice to prepone or postpone transfers.</p>
        </br>
        <p>If a user attempts to schedule a one-time transfer on a weekend or holiday, the user is informed as follows: </p>
        <p><strong>Weekend transfer:</strong> As the date selected is a weekend, this transfer will start to be processed on the next/prior business day.</p>
        <p><strong>Holiday transfer:</strong> As the date selected is a holiday, this transfer will start to be processed on the next/prior business day.</p>
        <p class="block-quote">Note: The previous/next day transfer will be adjusted based on the Financial Institutions choice to prepone or postpone transfers.</p>
    </div>
    </div>
    </br>
    <div>
    <input type="checkbox" class="collapsible-checkbox" id="section4">
    <label class="label-expand" for="section4">Standard Transfers</label>
    <div class="content-expand">
        <p>Standard funds transfers are inter-institution transfers settled using the ACH system and completed within three business days. The completion of a transfer, including the availability of funds in the destination account and access to transaction details, depends in part on how quickly the client updates its account after receiving funds transfer information.</p> 
        <p>Funds are posted to the destination account before start-of-business on the third business day after the funds are withdrawn from the source account.</p>
        <p>Banking holidays and/or New York Stock Exchange (NYSE) holidays extend the transaction cycle for standard transactions.</p>
        <table>
  <tr>
    <th>Requested by 10:00 PST on:</th>
    <th>Source account debited before Start-of-Business on:</th>
    <th>Destination account credited before Start-of-Business on:</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>Tuesday</td>
    <td>Thursday</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>Wednesday</td>
    <td>Friday</td>
  </tr>
  <tr>
    <td>Wednesday</td>
    <td>Thursday</td>
    <td>Monday</td>
  </tr>
  <tr>
    <td>Thursday</td>
    <td>Friday</td>
    <td>Tuesday</td>
  </tr>
  <tr>
    <td>Saturday</td>
    <td>Monday</td>
    <td>Wednesday</td>
  </tr>
  <tr>
    <td>Sunday</td>
    <td>Monday</td>
    <td>Wednesday</td>
  </tr>
</table>
    </div>
    </div>
</div>


<style>

    .collapsible-container {
        width: 100%;
    }


    .collapsible-checkbox {
        display: none;
    }

    .label-expand {
        background-color: #777;
        color: white;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        display: block;
    }

    .collapsible-checkbox:checked+.label-expand {
        background-color: #555;
    }

    .content-expand {
        padding: 0 18px;
        display: none;
        overflow: hidden;
        background-color: #f1f1f1;
    }

    .collapsible-checkbox:checked+.label-expand+.content-expand {
        display: block;
    }

    .block-quote {
        padding: 1em;
        color: #6a737d;
        border-left: 0.375em solid #40a9ff;
        background: #e6f7ff;
        border-radius: 3px;
    }

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
    
    .card-body {
        margin: 20px;
    }
    .card-body ul {
        list-style: none;
        padding-left: 20px;
    }
    .card-body ul li::before {
        content: "\2022";
        font-size: 1.5em;
        color: #f60;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
</style>

