<html>
  <table style="width: 100%;">
            <thead>
                <tr>
                    <th> Card Account Profile Parameter</th>
                    <th> Description, Usage Restriction, and Error Flow </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">CNUM0 </br>Client will pass to Fiserv? YES</td>
                    <td>The credit/debit/prepaid card account number Usage Restrictions
                    </br>Is a required payload parameter Should be numeric value</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">C_EXPDATE0 </br>Client will pass to Fiserv? YES</td>
                    <td>Card Expiration Date</br>Usage Restrictions</br>Must use the format – MMYY Is a required payload parameter when a client uses Instant Payment and passes the debit card through SSO.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">C_TYPE0 </br>Client will pass to Fiserv? </td>
                    <td>Type of card</br>Usage Restrictions</br>Valid values will be</br>“C” = Credit card</br>“D” = Debit card</br>“P” = Prepaid card</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">C_BRAND0 </br>Client will pass to Fiserv? </td>
                    <td>Card brand associated with the credit/debit/prepaid card</br>Usage Restrictions  </br>Valid values will be</br>“V” = Visa</br>“M” = MasterCard</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">C_ADDRESSLINE10 </br>Client will pass to Fiserv? </td>
                    <td>Card’s billing address – line 1</br>Usage Restrictions</br>If not passed, STREET will be used as name on card Associated value must be alphanumeric, 1 to 60 characters in length.Can include period(.), comma(,), number sign(#), dash(-), slash(/) or space</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">C_ADDRESSLINE20 </br>Client will pass to Fiserv? </td>
                    <td>Card’s billing address line 2 as additional card holder’s address</br>Usage Restrictions</br>If not passed, STREET2 will be used as name on card</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">C_CITY0 </br>Client will pass to Fiserv? </td>
                    <td>Card’s billing address city</br>Usage Restrictions</br>If not passed, CITY will be used as name on card Associated value must be alphabetic, 1 to 25 characters in length.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">C_STATE0 </br>Client will pass to Fiserv? </td>
                    <td>Card’s billing address state</br>Usage Restrictions</br>If not passed, STATE will be used as name on card Associated value must be alphabetic letters, 2 characters in length.</br> If 2 characters, must be valid for state/US territory; full spelling cannot be longer than 25 characters.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">C_ZIP0 </br>Client will pass to Fiserv? </td>
                    <td>Card billing address ZIP Code</br>Usage Restrictions</br>If not passed, ZIP will be used as name on card Associated value must be numeric and 5 digits in length. If more than 5 digits in length are submitted, then the additional characters will be ignored</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">C_PROC_NETWORKS0 </br>Client will pass to Fiserv? </td>
                    <td>Comma separated list of available networks for processing the card transaction  </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">C_SRC0 </br>Client will pass to Fiserv? </td>
                    <td>Card source </br>Usage Restrictions</br>Valid values will be</br> “FI” </br>“USER”</td>
                </tr>
            </tbody>
        </table>
</html>
<div class="table-3-button-container">
    <br>
    <div class="table-3-left-button">
        <a href="?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/payload-parameters.md">Back</a>
    </div>
</div>
<style>
    .table-3-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .table-3-left-button a{
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
    .table-3-left-button a{ 
        left: 0;
    }
    .table-3-left-button a:hover {
        color: #f60;
        background-color: white;
        border: 2px solid #f60;
    }
    </style>