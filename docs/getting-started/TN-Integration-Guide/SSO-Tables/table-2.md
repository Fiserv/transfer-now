<html>
  <table style="width: 100%;">
            <thead>
                <tr>
                    <th> Account Profile Parameter</th>
                    <th> Description, Usage Restriction, and Error Flow </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">ANUM0 </br>Client will pass to Fiserv? YES</td>
                    <td>End user’s ACH-able account number</br>Usage Restrictions</br>Is a required payload parameter because the value is required in the ACH header record </br>Associated value must be alphanumeric, 3 to 17 characters in length. Multiple ANUM values can be passed in the payload by incrementing the parameter suffix (i.e., the ‘0’ in ANUM0) by one for each additional ANUM value</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv will return an SS31 payload error if the parameter is not present in payload or the associated value has a length equal to 0</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">ADSC0 </br>Client will pass to Fiserv?____</td>
                    <td>Account description or nickname field.</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">ACCOUNT_NUMBER0 </br>Client will pass to Fiserv? ____</td>
                    <td>End user’s “friendly” account number. In most cases, an end user’s account will have the same value as the ANUM parameter. However, with some FIs, (e.g., with credit unions) an end user’s FI specific account number may be different than the corresponding ANUM value. If so, then setting the ACCOUNT_NUMBER parameter to some value will result in that value being displayed to the user rather than the ANUM value.</br>Usage Restrictions</br>Is an optional payload parameter</br>Associated value can be a maximum of 30 characters in length, and can include spaces or dashes Multiple ACCOUNT_NUMBER values can be passed in the payload by incrementing the parameter suffix (i.e., the ‘0’ in ACCOUNT_NUMBER0) by one for each additional ACCOUNT_NUMBER value</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">ATYP0 </br>Client will pass to Fiserv? YES</td>
                    <td>The basic type of the end user’s account</br>Usage Restrictions</br>Is a required payload parameter because the value is required in the ACH header record Associated value must be one of the following integers:</br>0 = Savings</br>1 = Checking</br>2 = Money Market Savings</br>3 = Money Market Checking</br>7 = Loan (not a default option, contact project managers)</br>5 = Business Savings (not a default option, contact project managers)</br>6 = Business Checking (not a default option, contact project managers)</br>Business account types need to pass additional fields.</br>Multiple ATYP values can be passed in the payload by incrementing the parameter suffix (i.e., the ‘0’ in ATYP0) by one for each additional ATYP value</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload. However, failure to pass the parameter or setting it to an unacceptable value will result in the associated account being displayed as suspended, thus making it ineligible for transfers</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">ASTAT0 </br>Client will pass to Fiserv? YES</td>
                    <td>The account status.</br>Usage Restrictions</br>Is a required payload parameter Associated value must be one of the following integers:</br>0 = Account is eligible for transfers</br>1 = Account has been closed</br>Multiple ASTAT values can be passed in the payload by incrementing the parameter suffix (i.e., the ‘0’ in ASTAT0) by one for each additional ASTAT value</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload. However, failure to pass the parameter or setting it to a ‘1’ will result in the associated account being displayed as suspended, thus making it ineligible for transfers</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">BALANCE0 </br>Client will pass to Fiserv? YES</td>
                    <td>End user’s available account balance.</br> Used as a Client representation of funds available for transfer at the time of user sign-on. This account balance is checked before executing a non-recurring transfer request</br>Usage Restriction      </br>Is a required payload parameter</br>Associated value must be numeric, can only have two digits to the right of a single decimal, and can be preceded by an optional minus sign: [-]####.## (e.g., 1234.56)</br>Multiple BALANCE values can be passed in the payload by incrementing the parameter suffix (i.e., the ‘0’ in BALANCE0) by one for each additional BALANCE value</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload. However, failure to pass the parameter will result in the associated account being displayed as suspended, thus making it ineligible for transfers</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">RTN0 </br>Client will pass to Fiserv? YES</td>
                    <td>Client FI’s 9 digit ABA/routing number</br>Usage Restrictions</br>Is a required payload parameter</br>Associated value must be numeric and 9 digits in length</br>Multiple RTN values can be passed in the payload by incrementing the parameter suffix (i.e., the ‘0’ in RTN0) by one for each additional RTN value</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv will return an SS29 payload error if the parameter is not present in payload or the associated value has a length equal to 0 Fiserv will display any account associated with an invalid routing number as being suspended, thus making it ineligible for transfers</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">DATE_ACCOUNT_OPENED0 </br>Client will pass to Fiserv? ____</td>
                    <td>The date the end user’s account was opened</br>Usage Restrictions</br>Is an optional payload parameter</br>Associated value must be formatted as follows: MMYYYY, where MM represents a valid month and YYYY represents a valid year Multiple DATE_ACCOUNT_OPENED0 values can be passed in the payload by incrementing the parameter suffix (i.e., the ‘0’ in DATE_ACCOUNT_OPENED0) by one for each additional DATE_ACCOUNT_OPENED0 value</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">ASEG0 </br>Client will pass to Fiserv? ____</td>
                    <td>Used to identify user/account groups for purposes of enabling, by group, different limits, user transaction fees, qualification rule settings, and/or service options. Values are validated against segment codes setup in the Fiserv ePayments Global Risk Administration (GRA) application</br>Usage Restrictions</br>Is an optional payload parameter with restrictions; see Error FlowAssociated value is alphabetic, minimum of 2 characters in length</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload. If the parameter is not included in the payload or the associated value is blank, Fiserv will always use a default value of ‘AA’ when processing the end user payload submission. Rather than relying on Fiserv to set the default value, Fiserv strongly suggests that the Client always include this parameter and the associated default value in the payload submission. After the Client has a clear understanding of the GRA application, the Client can then change the default value.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">BUSINESS_NAME0 </br>Client will pass to Fiserv? ____</td>
                    <td>Business name.</br>Usage Restrictions</br>Is an optional payload parameter if business account is being sent Associated value must contain alphabetic letters only, 1 to 90 characters in length. 0-9, A-Z, a-z, space, and those special characters that have an ASCII value greater than hexadecimal “1F”</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Error Flow If there is any validation error, it will not throw an SSO error. It will be ignored.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">BUSINESS_EMAIL0 </br>Client will pass to Fiserv? YES</td>
                    <td>Business entity email address.</br>Usage Restrictions</br>Is an optional payload parameter with restrictions Associated value must be alphanumeric, max 62 characters in length. Must contain a single @ symbol followed by a single period (.) anywhere after the @ symbol</td>
                </tr>
                <tr>
                    <td>Error Flow </br>If there is any validation error, it will not throw an SSO error. It will be ignored.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">BUSINESS_STREET0 </br>Client will pass to Fiserv? YES</td>
                    <td>Business entity street address </br>Usage Restrictions </br>Is an optional payload parameter Associated value must be alphanumeric, 1 to 60 characters in length. Can include period(.), comma(,), number sign(#), dash(-), slash(/) or space </td>
                </tr>
                <tr>
                    <td>Error Flow </br>If there is any validation error, it will not throw an SSO error. It will be ignored.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">BUSINESS_STREET20 </br>Client will pass to Fiserv? YES</td>
                    <td>Additional Business entity street address information</br>Usage Restrictions    </br>Is an optional payload parameter Associated value must be alphanumeric, 0 to 60 characters in length, and can include a period(.), comma(,), number sign(#), dash(-), slash(/) or space </td>
                </tr>
                <tr>
                    <td>Error Flow </br>If there is any validation error, it will not throw an SSO error. It will be ignored.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">BUSINESS_ CITY0 </br>Client will pass to Fiserv? YES</td>
                    <td>Business entity city </br>Usage Restrictions   </br>Is an optional payload parameter with restrictions Associated value must be alphabetic, 1 to 25 characters in length.</td>
                </tr>
                <tr>
                    <td>Error Flow </br>If there is any validation error, it will not throw an SSO error. It will be ignored.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">BUSINESS_ STATE0 </br>Client will pass to Fiserv? YES</td>
                    <td>Business entity state</br>Usage Restrictions   </br>Is an optional payload parameter Associated value must be alphabetic letters, and the max length is 2.</td>
                </tr>
                <tr>
                    <td>Error Flow </br>If there is any validation error, it will not throw an SSO error. It will be ignored.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">BUSINESS_ZIP0 </br>Client will pass to Fiserv? YES</td>
                    <td>Business entity postal ZIP Code</br>Usage Restrictions</br>Is an optional payload parameter Associated value must be numeric and 5 digits in length. If more than 5 digits in length are submitted, then the additional characters will be ignored</td>
                </tr>
                <tr>
                    <td>Error Flow </br>If there is any validation error, it will not throw an SSO error. It will be ignored.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">BUSINESS_EIN0</br>Client will pass to Fiserv? YES</td>
                    <td>Business entity identifier.</br>Usage Restrictions </br>Is an optional payload parameter Associated value must be 9 digits in length </td>
                </tr>
                <tr>
                    <td>Error Flow </br>If there is any validation error, it will not throw an SSO error. It will be ignored.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">BUSINESS_ PHONE0 </br>Client will pass to Fiserv? YES</td>
                    <td>Business entity phone number</br>Usage Restrictions</br>Is an optional payload parameter Associated value is numeric, minimum 10 digits in length. Can include spaces or dashes. </td>
                </tr>
                <tr>
                    <td>Error Flow </br>If there is any validation error, it will not throw an SSO error. It will be ignored.</td>
                </tr>
            </tbody>
        </table>
</html>
<div class="table-2-button-container">
    <br>
    <div class="table-2-left-button">
         <a href="?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/payload-parameters.md">Back</a>
    </div>
    <div class="table-2-right-button">
        <a href="?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/payload-secure-msg.md">Next</a>
    </div>
</div>
<style>
    .table-2-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .table-2-left-button a,
    .table-2-right-button a{
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
    .table-2-left-button a{ 
        left: 0;
    }
    .table-2-right-button a{
        right: 12px;
    }
    .table-2-left-button a:hover,
    .table-2-right-button a:hover {
        color: #f60;
        background-color: white;
        border: 2px solid #f60;
    }
    </style>