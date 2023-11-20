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
<img src="../../assets/images/one-time.png">
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

