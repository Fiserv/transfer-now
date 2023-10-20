

<!--

type: tab

titles: Standard Transfers, Next Day Transfers, Instant Transfers ,High Limit Transfers

-->

 

# Standard Transfers
Standard funds transfers are inter-institution transfers settled using the ACH system and completed within three business days. The completion of a transfer, including the availability of funds in the destination account and access to transaction details, depends in part on how quickly the client updates its account after receiving funds transfer information. 
Funds are posted to the destination account before start-of-business on the third business day after the funds are withdrawn from the source account. 
Banking holidays and/or New York Stock Exchange (NYSE) holidays extend the transaction cycle for standard transactions.

<center>

![image](../../assets/images/TRANSACTION%20CYCLE%20–%20STANDARD%20TRANSFER.png) <br/>
TRANSACTION CYCLE-STANDARD TRANSFER

</center>

## Available Balance Check

For an outbound one-time immediate transfer, TransferNow performs a check to determine if the amount of the transfer is greater than the host from-account’s available balance. The host account balance is passed from the client to Fiserv in the Single Sign-On. 
TransferNow can perform either a hard fail or soft fail of the transfer if the available balance is less than the transfer amount.

<!-- theme: info -->

> :memo: **Note:** Clients specify whether they want hard fail or soft fail in the Data Gathering Form (DGF).

-	Hard Fail - TransferNow displays a message to the user informing them that the transfer amount exceeds the available balance. The user is prevented from submitting the transfer until adjusting the transfer amount less than or equal to the available balance.
-	Soft Fail - TransferNow displays a warning message to the user informing them that the transfer amount exceeds the available balance. The user is permitted to submit the transfer even though the transfer amount is greater than the available balance.


<!-- type: tab -->

 

# Next Day Transfers

Next-day ACH transfers are inter-institutional transfers in which both the debit and credit leg of the transaction settle the next business day by ACH. 
The completion of a transfer, including the availability of funds in the destination account and access to transaction details, depends in part on how quickly the client updates his/her account after receiving funds transfer information.


<center>

![image](../../assets/images/TRANSACTION%20CYLCLE%20-%20NEXT%20DAY%20TRANSFER.png) <br/>
TRANSACTION CYCLE-NEXT DAY TRANSFER

</center>
 

Accounts must qualify for Next-Day transfer service. If an account does not qualify for Next-Day, the Next-Day option is not made available to the user. 
Next-Day service is an optional service. If a client chooses not to offer Next-Day, the Next Day does not appear in the user interface.
Qualification Rules

The default qualification rules for Next-Day transfers are as follows:

-	The user has been a customer in good standing for at least three months. 
-	The user has not caused any negative activity or result via Fiserv ePayments software where such negative activity or result includes but is not limited to: Non-Sufficient Funds (NSF); Account Closed; Authorization Revoked by End User Payment Stopped; End User Advises not Authorized; Account Holder deceased; Beneficiary Deceased; or Account Frozen. 
-	For each external account from which a Next-Day processing funds transfer is initiated, the user has completed at least one (1) successful inbound funds transfer of at least $500 from the external account to a client hosted account no sooner than sixty (60) days prior to initiating the first inbound Next-Day processing funds transfer. 
-	For an inbound transaction, the user maintains an available account balance of at least $750 in the client-hosted account receiving the funds transfer. 
-	For an outbound transaction, the user maintains an available account balance of at least $750 (excluding the transaction amount) in the client-hosted account.


<!-- theme: info -->

> :memo: **Note:** If a client chooses not to offer an optional transfer type, it does not appear in the user interface. 

## Next Day Good Funds

-	Next Day Good Funds are Next Day transfers where the sender's account is instantly (within seconds) debited after the user executes a Next Day transfer. The credit to the receiving institution, however, occurs the next day via ACH. 
-	Next Day Good Funds are available when an FI is participating in Fiserv's NOW network and the sending account is at this FI. Because the funds being transferred are taken out of the sending account immediately after the user executes the transaction, the funds are guaranteed and secured for the FI, virtually eliminating all credit risk, including NSF. 
-	FIs that use Next Day Good Funds will be able to offer Next Day to 100% of its customers, increase limits, and reduce administrative costs.


 <center>

![image](../../assets/images/PROCESS%20FLOW%20COMPARISON.png) <br/>
TRANSACTION CYCLE-NEXT DAY TRANSFER

</center>


<!-- type: tab -->

# Instant Transfers (Via the NOW Network)

The optional Instant Transfers feature adds real-time speed to TransferNow. Through use of real-time connectivity offered by the NOW Network, Instant Transfers enables consumers to move money instantly between their bank accounts at different financial institutions and between their account at host institution and Debit Card.
Instant Transfers are inter-institution transfers that are completed within seconds of transaction initiation by the consumer. When an Instant Transfer is executed by the user, the sending account or card is debited instantly and then the receiving account or card is credited instantly. Funds are made available instantly for withdrawal to the consumer at the receiving institution as well. 
Instant Transfers are only available to FIs that participate in Fiserv's NOW network. The NOW network is Fiserv's real-time payments network that can move funds instantly from an account/card at one participating Financial Institution to an account/card at another participating FI. 
The NOW network debits and credits accounts instantly at an FI through real-time instructions/messages to the core banking system at an FI. When a user executes an Instant Transfer, the funds are instantly debited from her/his account/card by TransferNow through the NOW network. Once the debit transaction is successful, a real-time credit message/instruction is issued to the receiving FI. Funds are instantly credited to the receiving account/card and immediately made available to the user. Because the funds are actually taken out of the account prior to the credit transaction, this constitutes a 'good funds' model.

<!-- theme: info -->

> :memo: **Note:** Instant connectivity via the NOW network is a prerequisite for the Instant Transfer feature. Debit-card networks can be accessed via the NOW network (only VISA is offered at this time). Clients should clarify which service provider supports their Instant service (e.g., ESF) and provide that information to the implementation project manager. If an FI already has Instant Transfers for Zelle® via NOW Instant connectivity, then Instant Transfers will leverage that same underlying connectivity.

 <!-- type: tab -->


 # High Limit Transfers
 
A client can offer high-limit funds transfers beyond the transaction limits that apply to standard 
service processing.

The default qualification rules for high-limit transfers are listed below:

-	The user has been a customer in good standing for at least three months. 
-	The user has not caused any negative activity or result via Fiserv ePayments software where such negative activity or result includes but is not limited to: Non-Sufficient Funds (NSF); Account Closed; Authorization Revoked by End User Payment Stopped; End User Advises not Authorized; Account Holder deceased; Beneficiary Deceased; or Account Frozen.
-	For each external account from which a high limit funds transfer is initiated, the user has completed at least one successful inbound funds transfer of at least $1,000 from the external account to a client-hosted account no sooner than sixty (60) days prior to initiating the first inbound high-limit funds transfer.

 <!-- type: tab -->


# Shared Transfers (Optional)

Optionally, financial Institutions can allow all users that share a host account, to view (but not edit/delete) all activity within that account.


<!-- type: tab-end -->

 