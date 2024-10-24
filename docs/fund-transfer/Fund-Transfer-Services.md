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

TN supports ACH transaction methods:

A transaction processed via the Good Funds Model (GFM) has less risks when compared to transactions processed via the Next Day Transfers (NDT).

<img class="image-center" src="/assets/images/ACH1.png"/>

</br>


<!-- theme: info -->

> :memo: _**Note:** TN offers automated emails for clients to send to users to keep them informed of the progress of the ACH transaction._

<div class="collapsible-container">
<div>
    <input type="checkbox" class="collapsible-checkbox" id="section1">
    <label class="label-expand" for="section1">One-Time/Recurring Transfer</label>
    <div class="content-expand">
        <h2>One-Time Transfer</h2>
        <div class="content-body">
          <div class="content-left">
          <p>A one-time transfer, provide the necessary details to ensure a smooth and secure transcation.</p>
          </div>
          <div class="image-otp">
          <img src="/assets/images/one-time-transfer.png">
          </div>
        </div>
          <h2>Recurring Transfers</h2>
        <div class="content-body">
          <div class="content-left">
          <p>
            To eanble a recurring transfer, provide the necessary details to ensure a smooth and secure transcation.
        </p>
          </div>
          <div class="image-otp">
          <img src="/assets/images/rec-time-transfer.png">
          </div>
        </div>
        <p class="block-quote"> &#128221 <i> <strong>Note:</strong> The Instant Transfer option is not applicable for recurring transfers.</i></p>
        <h2>On-Screen User Messaging</h2>
        <p>If a user sets up a Scheduled Recurring Transfer with a transfer date that falls on a weekend or a holiday, they are informed that:</p> 
        <p>“A send date of one or more transfers may fall on a weekend, bank holiday or at the end of a month with less than 31 days. We will reschedule these transfers for the business day”. 
        </p>
        <p class="block-quote"> &#128221 <i> <strong>Note:</strong> The previous/next day transfer will be adjusted based on the Financial Institutions choice to schedule transfer.</i></p>
        </br>
        <p>If a user attempts to schedule a one-time transfer on a weekend or holiday, the user is informed as follows: </p>
        <p><strong>Weekend transfer:</strong> As the date selected is a weekend, this transfer will start to be processed on the next/prior business day.</p>
        <p><strong>Holiday transfer:</strong> As the date selected is a holiday, this transfer will start to be processed on the next/prior business day.</p>
        <p class="block-quote"> &#128221 <i> <strong>Note:</strong> The previous/next day transfer will be adjusted based on the Financial Institutions choice to schedule transfer.</i></p>
    </div>
    </div>
    </br>
    <div>
    <input type="checkbox" class="collapsible-checkbox" id="section2">
    <label class="label-expand" for="section2">Standard Transfers</label>
    <div class="content-expand">
        <p>Standard funds transfers are inter-institution transfers settled using the ACH system and completed within three business days. The completion of a transfer, including the availability of funds in the destination account and access to transaction details, depends in part on how quickly the client updates its account after receiving funds transfer information.</p> 
        <p>Funds are posted to the destination account before start-of-business on the third business day after the funds are withdrawn from the source account.</p>
        <p>Banking holidays and/or New York Stock Exchange (NYSE) holidays extend the transaction cycle for standard transactions.</p>
        <table>
  <tr>
    <th>Requested by 10:00pm PST on:</th>
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
    <td>Friday</td>
    <td>Monday</td>
    <td>Wednesday</td>
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
<h2>Available Balance Check</h2>
        <p>For an outbound one-time immediate transfer, TransferNow performs a check to determine if the amount of the transfer is greater than the host from-account’s available balance. The host account balance is passed from the client to Fiserv in the Single Sign-On.</p>
        <p>TransferNow can perform either a hard fail or soft fail of the transfer if the available balance is less than the transfer amount.</p>
        <p class="block-quote"> &#128221 <i> <strong>Note:</strong> Clients specify whether they want hard fail or soft fail in the Data Gathering Form (DGF).</i></p>
        <p><strong>Hard Fail:</strong> TransferNow displays a message to the user informing them that the transfer amount exceeds the available balance. The user is prevented from submitting the transfer until adjusting the transfer amount less than or equal to the available balance.</p>
        <p><strong>Soft Fail:</strong> TransferNow displays a warning message to the user informing them that the transfer amount exceeds the available balance. The user is permitted to submit the transfer even though the transfer amount is greater than the available balance.</p>
    </div>
    </div>
    </br>
    <div>
    <input type="checkbox" class="collapsible-checkbox" id="section3">
    <label class="label-expand" for="section3">Next Day Transfers</label>
    <div class="content-expand">
        <p>Next-day ACH transfers are inter-institutional transfers in which both the debit and credit leg of the transaction settle the next business day by ACH.</p> 
        <p>The completion of a transfer, including the availability of funds in the destination account and access to transaction details, depends in part on how quickly the client updates his/her account after receiving funds transfer information.</p>
        <table>
  <tr>
    <th>Requested by 10:00pm PST on:</th>
    <th>Source account debited before Start-of-Business on:</th>
    <th>Destination account credited before Start-of-Business on:</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>Tuesday</td>
    <td>Tuesday</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>Wednesday</td>
    <td>Wednesday</td>
  </tr>
  <tr>
    <td>Wednesday</td>
    <td>Thursday</td>
    <td>Thursday</td>
  </tr>
  <tr>
    <td>Thursday</td>
    <td>Friday</td>
    <td>Friday</td>
  </tr>
  <tr>
    <td>Friday</td>
    <td>Monday</td>
    <td>Monday</td>
  </tr>
  <tr>
    <td>Saturday</td>
    <td>Tuesday</td>
    <td>Tuesday</td>
  </tr>
  <tr>
    <td>Sunday</td>
    <td>Tuesday</td>
    <td>Tuesday</td>
  </tr>
</table>
        <p>Accounts must qualify for Next-Day transfer service. If an account does not qualify for Next-Day, the Next-Day option is not made available to the user.</p>
        <p>Next-Day service is an optional service. If a client chooses not to offer Next-Day, the Next Day does not appear in the user interface.</p>
        <p>Qualification Rules for a TransferNow services includes but not limited to the following:</p>
        <div class="card-body">
            <ul>
            <li>Good Transaction History with NO negative activity.</li>
            <li>Maintains a minimum account balance for both inbound and outbound transactions</li>
            </ul>
        </div>
        <p class="block-quote"> &#128221 <i> <strong>Note:</strong> User transaction limits can be configured using Compass, Global Risk Administration (GRA).</i></p>
    </div>
    </div>
    </br>
    <div>
    <input type="checkbox" class="collapsible-checkbox" id="section4">
    <label class="label-expand" for="section4">Next Day Good Funds</label>
    <div class="content-expand">
        <div class="card-body">
            <ul>
            <li>Next Day Good Funds are Next Day transfers where the sender's account is instantly (within seconds) debited after the user executes a Next Day transfer. The credit to the receiving institution, however, occurs the next day via ACH.</li>
            <li>Next Day Good Funds are available when an FI is participating in Fiserv's NOW network and the sending account is at this FI. Because the funds being transferred are taken out of the sending account immediately after the user executes the transaction, the funds are guaranteed and secured for the FI, virtually eliminating all credit risk, including NSF. </li>
            <li>FIs that use Next Day Good Funds will be able to offer Next Day to 100% of its customers, increase limits, and reduce administrative costs.</li>
            </ul>
        </div>
        <p>
            The below Figure explains the differences in process flow between ACH, Next Day Good Funds, and Instant Transfers.
        </p>
        <img src="/assets/images/fund-transfer-flow.png"/>
    </div>
    </div>
    </br>
    <div>
    <input type="checkbox" class="collapsible-checkbox" id="section5">
    <label class="label-expand" for="section5">Instant Transfers (Via the NOW Network)</label>
    <div class="content-expand">
            <p>The optional Instant Transfers feature adds real-time speed to TransferNow. Through use of real-time connectivity offered by the NOW Network, Instant Transfers enables consumers to move money instantly between their bank accounts at different financial institutions and between their account at host institution and Debit Card.</p>
            <p>Instant Transfers are inter-institution transfers that are completed within seconds of transaction initiation by the consumer. When an Instant Transfer is executed by the user, the sending account or card is debited instantly and then the receiving account or card is credited instantly. Funds are made available instantly for withdrawal to the consumer at the receiving institution as well.</p>
            <p>Instant Transfers are only available to FIs that participate in Fiserv's NOW network. The NOW network is Fiserv's real-time payments network that can move funds instantly from an account/card at one participating Financial Institution to an account/card at another participating FI.</p>
        <p>NOW network debits and credits accounts instantly at an FI through real-time instructions/messages to the core banking system at an FI. When a user executes an Instant Transfer, the funds are instantly debited from her/his account/card by TransferNow through the NOW network. Once the debit transaction is successful, a real-time credit message/instruction is issued to the receiving FI. Funds are instantly credited to the receiving account/card and immediately made available to the user. Because the funds are taken out of the account prior to the credit transaction, this constitutes a 'good funds' model.</p>
        <p class="block-quote"> &#128221 <i> <strong>Note:</strong> Instant connectivity via the NOW network is a prerequisite for the Instant Transfer feature. Debit-card networks can be accessed via the NOW network (only VISA is offered at this time). Clients should clarify which service provider supports their Instant service (e.g., ESF) and provide that information to the implementation project manager. If an FI already has Instant Transfers for Zelle® via NOW Instant connectivity, then Instant Transfers will leverage that same underlying connectivity.</i></p>
    </div>
    </div>
    </br>
    <div>
    <input type="checkbox" class="collapsible-checkbox" id="section6">
    <label class="label-expand" for="section6">High Limit Transfers</label>
    <div class="content-expand">
            <p>A client can offer high-limit funds transfers beyond the transaction limits that apply to standard service processing.</p>
            <p>Qualification Rules for a TransferNow services includes but not limited to the following:</p>
            <div class="card-body">
            <ul>
            <li>Good Transaction History with NO negative activity.</li>
            <li>Maintains a minimum account balance for both inbound and outbound transactions.</li>
            </ul>
            <p class="block-quote"> &#128221 <i> <strong>Note:</strong> User transaction limits can be configured using Compass, Global Risk Administration (GRA).</i></p>
        </div>
        <h2>Cancelling and Editing Transfers</h2>
        <p>Users can edit scheduled or recurring transfers in the Activity screen.</p>
        <img src="/assets/images/activity.png"/>
    </div>
    </div>
    </br>
    <div>
    <input type="checkbox" class="collapsible-checkbox" id="section7">
    <label class="label-expand" for="section7">Shared Transfers (Optional)</label>
    <div class="content-expand">
      <p>Optionally, financial Institutions can allow all users that share a host account, to view (but not edit/delete) all activity within that account.</p>
    </div>
    </div>
    </br>
    <div>
    <input type="checkbox" class="collapsible-checkbox" id="section8">
    <label class="label-expand" for="section8">Cancelling/Editing Transfers</label>
    <div class="content-expand">
      <p>Only the user who creates a transfer (or whom it was created on behalf of) can edit/cancel the transfer. For all others who see this shared transfer, it is view only.</p>
    </div>
    </div>
</div>

### See Also

[Transfer via Bank Accounts](?path=docs/transfer-via-bank-accounts/transfer-via-bank-accounts.md&branch=develop)     
[Transfer via Debit Cards](?path=docs/debit-card-transaction.md&branch=develop)     
[Transfer Frequencies/Duration](?path=docs/transfer-durations.md&branch=develop)

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
        position: relative;
    }
    .label-expand::after{
        content: '+';
        font-size: 22px;
        font-weight: bold;
        position: absolute;
        right: 25px;
        top: 8px;
    }
    input:checked + label::after {
        content: '-';
        font-size: 22px;
        right: 25px;
        top: 8px;
    }

    .collapsible-checkbox:checked+.label-expand {
        background-color: #555;
    }

    .content-expand {
        padding: 18px;
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
        width: 50%
    }

    .content-body {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
    }

    .image-center {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 70%;
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

