## Real Time Verification

Real-time account verification - also known as “online credential verification” - leverages Fiserv Aggregation Services to perform the verification.

If an account is eligible for real-time account verification, TransferNow prompts the user to enter his/her user ID and password for the banking web site hosted by the financial institution that services the account. The AllData service allows TransferNow to log onto the web site. Once there, TransferNow adds the name and account numbers from the web site.

TransferNow then matches the added name and account numbers against the name of the applicant and the account number to verify account ownership in real time.

 &nbsp;


<!-- theme: info -->

> :memo: **Note:** For security and privacy considerations, Fiserv never stores user ID and password data.

 &nbsp;


Real-time account verification can fail for the following reasons:

- The user provided incorrect login credentials after multiple attempts

- TransferNow was able to log onto the banking web site, but the information on the web site did not match what the user entered

- The banking web site is down for upgrades or TransferNow is experiencing temporary connection issues with the web site.

 &nbsp;


If real-time account verification fails, the user is prompted to use the trial deposit verification method.

 &nbsp;

<!-- theme: info -->

> :memo: **Note:** Clients can choose not to use real-time account verification to verify the user's ownership of the external account.

 &nbsp;

There are thousands of financial institutions. It is not possible for TransferNow to support real-time account verification for all institutions. TransferNow checks the ABA number of the external account to verify that it is a supported financial institution before offering real-time account verification as an option.

If real-time account verification is not available, then the user's account is verified using trial deposit verification.

Refer to Figure 6 for account verification screen.

 &nbsp;


![image](../assets/images/RealTimeVerification.png)



## Documents References

- [Account Restrictions](?path=docs/acc-to-acc-transfer/Manage-Account/acc-restrictions.md)
- [Account Summary Information](?path=docs/acc-to-acc-transfer/Manage-Account/acc-summary.md)
- [Deleting Accounts](?path=docs/acc-to-acc-transfer/delete-Acc.md)
- [Pending Transfers](?path=docs/fund-transfer/pending-Transfer.md)
- [Add/Delete Limitations](?path=docs/acc-to-acc-transfer/Manage-Account/add-del-limitations.md)