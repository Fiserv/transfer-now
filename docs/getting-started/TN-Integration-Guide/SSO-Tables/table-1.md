<html>
  <table style="width: 100%;">
            <thead>
                <tr>
                    <th> User profile parameter</th>
                    <th> Description, Usage Restriction, and error flow </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">INSTITUTION_ID </br>Client will pass to Fiserv? YES</td>
                    <td>Fiserv assigned unique persistent Client identifier (also referred to as the Client Home ID)</br> Usage Restrictions</br> Is a required payload parameter Associated value must be numeric and 8 digits in length</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information):  </br>Fiserv will return an SS28 payload error if the parameter is not present in payload or the associated value length equals 0Fiserv will display an application SS42 error page if the associated value length is > 0 but < 8, or > 8</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">CE_APPLICATION_CODE</br>Client will pass to Fiserv? _____</td>
                    <td>Client indicates if end user is accessing TransferNow or another Fiserv product.</br>Usage Restrictions</br>If client sends TN or any other value, end user would be directed to the TransferNow application.</br>If this field is missing, end user would be directed to the TransferNow application. </td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information): </br>N/A</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">USER_FI_NUMBER</br>Client will pass to Fiserv? YES</td>
                    <td>Client assigned unique persistent end user identifier; end user can have only one active profile per Fiserv service </br>Usage Restrictions</br> Is a required payload parameter Associated value should be alphanumeric, 3 to 20 characters in length. It can include dashes but not spaces</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information):</br>Fiserv will return an SS30 payload error if the parameter is not present in payload or the associated value length equals 0</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="3">FIRST_NAME</br>Client will pass to Fiserv? YES</td>
                    <td>End user’s first name.</br> Used for account verification, selected manual account verification calls to external institutions, identity information for collections, caller identity verification, and COMPASS end user search </br>Usage Restrictions</br> Is a required payload parameter Associated value must contain alphabetic letters only, 1 to 30 characters in length. If 1 character in length, character must be a letter. If > 1 character in length, characters can include letters, periods, a single space, apostrophe, and/or a hyphen</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)   </br>Fiserv will return an SS15 payload error if the parameter is not present in payload or the associated value has a length equal to 0 or is > than 30 characters Fiserv will display an application SS24 error page if the passed in payload parameter value combination of FIRST_NAME, LAST_NAME, SSN, and DOB has already been associated with some other USER_FI_NUMBER</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="4">LAST_NAME</br>Client will pass to Fiserv? YES</td>
                    <td>End user’s last name. Used for account verification, selected manual account verification calls to external institutions, identity information for collections, caller identity verification, and COMPASS end user search  </br>Usage Restrictions</br> Is a required payload parameter Associated value must be alphabetic letters only, 1 to 30 characters in length. If 1 character in length, character must be a letter. If > 1 character in length, characters can include letters, periods, a single space, apostrophe, and/or a hyphen</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)</br>Fiserv will return an SS16 payload error if the parameter is not present in payload or the associated value has a length equal to 0 or is > than 30 characters</br>Fiserv will display an application SS24 error page if the passed in payload parameter value combination of FIRST_NAME, LAST_NAME, SSN, and DOB has already been associated with some other USER_FI_NUMBER</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="5">EMAIL</br>Client will pass to Fiserv? _____</td>
                    <td>End user’s email address. Used as the primary means of communication with end user, and in Fiserv fraud detection rules. For example, a change of email address in association with increased transfer activity could indicate potential fraud activity. </br>Usage Restrictions   </br>Is an optional payload parameter with restrictions; see Error Flow Associated value must be alphanumeric, max 100 characters in length. Must contain a single @ symbol followed by a single period (.) anywhere after the @ symbol</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)   </br>Fiserv will display an application SS67 error page if the parameter is not present in payload, the associated value has a length of 0 or is invalid AND the Client is not allowing end users to edit or delete email addresses from within the application (i.e., the Client has indicated ‘NO’ in DGF Section 4.6). </br>Fiserv will display an email edit page if the parameter is not present in payload, the associated value has a length of 0 or is invalid AND the Client is allowing end users to edit or delete email addresses from within the application (i.e., the Client has indicated ‘YES’ in DGF Section 4.6) </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="6">STREET</br>Client will pass to Fiserv? YES</td>
                    <td>End user’s street address  </br>Usage Restrictions </br>Is a required payload parameterAssociated value must be alphanumeric, 1 to 60 characters in length. Can include period(.), comma(,), number sign(#), dash(-), slash(/) or space</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)   </br>Fiserv will return an SS19 payload error if the parameter is not present in payload or the associated value has a length equal to 0 or is > than 60 characters</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="7">CITY</br>Client will pass to Fiserv? YES</td>
                    <td>City end user lives in </br>Usage Restrictions </br>Is a required payload parameterAssociated value must be alphabetic, 1 to 25 characters in length.</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)   </br>Fiserv will return an SS17 payload error if the parameter is not present in payload or the associated value has a length equal to 0 or is > than 25 characters</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="8">STATE</br>Client will pass to Fiserv? YES</td>
                    <td>State or US territory end user lives in </br>Usage Restrictions </br>Is a required payload parameter Associated value must be alphabetic letters, 2 characters in length. If 2 characters, must be valid for state/US territory; full spelling cannot be longer than 25 character</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)</br>Fiserv will return an SS18 payload error if the parameter is not present in payload, the associated value is not a valid state or US territory, or has a length of 0, 1 or > 25 characters</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="9">ZIP</br>Client will pass to Fiserv? YES</td>
                    <td>End user’s postal ZIP Code </br>Usage Restrictions </br>Is a required payload parameter Associated value must be numeric and 5 digits in length. If more than 5 digits in length are submitted, then the additional characters will be ignored</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)   </br>Fiserv will return an SS20 payload error if the parameter is not present in payload, or the associated value has a length of < 5 characters or contains one or more non-numeric characters within the first five digit positions</td>
                </tr>
            </tbody>
             <tbody>
                <tr>
                    <td rowspan="10">SSN</br>Client will pass to Fiserv? YES</td>
                    <td>End user’s Social Security number </br>Usage Restrictions </br>Is a required payload parameter Associated value must be 9 digits in length and can include dashes or spaces. If more than 9 digits are submitted, the additional digits will be ignored</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for
                     more information)</br>Fiserv will return an SS14 payload error if the parameter is not present in payload or the associated value has a length equal to 0 </br>Fiserv will display an application SS24 error page if the passed in payload parameter value combination of FIRST_NAME, LAST_NAME, SSN, and DOB has already been associated with some other USER_FI_NUMBER</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="11">DOB</br>Client will pass to Fiserv? YES</td>
                    <td>End user’s date of birth </br>Usage Restrictions Is a required payload parameter Associated value must in MM/DD/YYYY format but not equal to 01/01/1901, YYYY > 1900, and end user’s calculated age is >= 18 and <= 110</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for
                     more information)</br>Fiserv will return an SS21 payload error if the parameter is not present in payload, the associated value has a length equal to 0, the end user’s calculated age is < 18 or > 110, or the associated MM/DD/YYYY value is equal to 01/01/1901 or YYYY equals 1900    </br>Fiserv will display an application SS24 error page if the passed in payload parameter value combination of FIRST_NAME, LAST_NAME, SSN, and DOB has already been associated with some other USER_FI_NUMBER</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="12">PHONE, PHONE2, etc. </br>Client will pass to Fiserv? YES</td>
                    <td>End user’s phone number Client may send multiple phone numbers. Each number should be denoted with a different number; number system starts with no number, then 2, 3, 4… N.         </br>Usage Restrictions </br>Is a required payload parameter Associated value is numeric, minimum 10 digits in length. Can include spaces or dashes.</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for
                     more information)</br>Fiserv will return an SS24 payload error if the parameter is not present in payload or the associated value has a length equal to 0 </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="13">PHONE_TYPE, PHONE2_TYPE, etc.</br>Client will pass to Fiserv? _____</td>
                    <td>Describes the type of phone that was sent. Number should match the phone that this value is describing. Number system starts with no number, then 2, 3, 4… N.  
                    </br>Usage Restrictions</br>Recognized phone types are: M for Mobile and L for Landline. Any other value sent would be stored as is. </br> Maximum 1 character. If more than 1 character, then we discard the value.If PHONE is not sent, but PHONE_TYPE is sent, then we discard the value.</td>
                </tr>
                <tr>
                    <td>Error Flow </br>
                    N/A</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="14">PHONE_USAGE,PHONE2_USAGE, etc. </br>Client will pass to Fiserv?_____</td>
                    <td>Describes the usage of phone that was sent. Number should match the phone that this value is describing. Number system starts with no number, then 2, 3, 4… N. 
                    </br>Usage Restrictions</br>Recognized phone usages are: E for Evening, W for Work, D for daytime and H for Home. Any other value sent would be stored as is. </br> Maximum 1 character. If more than 1 character, then we discard the value.If PHONE is not sent, but PHONE_USAGE is sent, then we discard the value.</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for
                     more information)</br>
                    N/A</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="15">MIDDLE_NAME </br>Client will pass to Fiserv? _____</td>
                    <td>User’s middle initial or name Format: 
                    </br>Usage Restrictions </br>Is an optional payload parameter </br> Associated value must be alphabetic letters, 1 to 30 characters in length. If 1 character in length, character must be a letter. If more than 1 character in length, characters can include letters, periods, a single space, apostrophe and/or a hyphen</td>
                </tr>
                <tr>
                    <td>Error Flow </br>
                    Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload
                </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="16">STREET2 </br>Client will pass to Fiserv? _____</td>
                    <td>Additional user street address information
                    </br>Usage Restrictions </br>Is an optional payload parameter </br> Associated value must be alphanumeric, 0 to 60 characters in length, and can include a period(.), comma(,), number sign(#), dash(-), slash(/) or space</td>
                </tr>
                <tr>
                    <td>Error Flow </br>
                    Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload
                </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="17">DRV_LIC </br>Client will pass to Fiserv? _____</td>
                    <td>End user’s driver’s license number
                    </br>Usage Restrictions </br>Is an optional payload parameter but Fiserv strongly suggests Client include parameter and associated value for Risk Management purposes </br> Associated value must be alphanumeric and a maximum of 25 characters in length</td>
                </tr>
                <tr>
                    <td>Error Flow </br>
                    Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload
                </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="18">DRV_LIC_STATE </br>Client will pass to Fiserv? _____</td>
                    <td>State user’s driver’s license issued in
                    </br>Usage Restrictions </br>Is an optional payload parameter but Fiserv strongly suggests Client include parameter and associated value for Risk Management purposes. </br> Associated value must be alphanumeric and a maximum of 25 characters in length</td>
                </tr>
                <tr>
                    <td>Error Flow </br>
                    Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload
                </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="18">MOTHERSNAME </br>Client will pass to Fiserv? _____</td>
                    <td>User’s mother’s maiden name </br>Usage Restrictions </br> Is an optional payload parameter but Fiserv strongly suggests Client include parameter and associated value for Risk Management purposesOnly needs to be passed once, when end user first enrolls in service Associated value must be alphabetic letters, 2 to 25 characters in length, and can include one space and/or one apostrophe </td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload
                </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="18">USER_HISTORY </br>Client will pass to Fiserv? _____</td>
                    <td>Number of months as a Company user (e.g., 30) </br>Usage Restrictions</br>Is an optional payload parameter but Fiserv strongly suggests Client include parameter and associated value for Risk Management purposesAssociated value must be numeric, maximum of 5 digits in length </td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload
                </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="18">USER_IN_GOOD_STANDING </br>Client will pass to Fiserv? _____</td>
                    <td>indicates whether or not the FI has deemed the end user to be considered eligible for performing funds transfers</br>Usage Restrictions</br>Is an optional payload parameter but Fiserv strongly suggests Client include parameter and associated value for Risk Management purposesAssociated value must be a numeric 1 or 0 (where 1 = user is in good standing with the FI, and 0 = user is not in good standing with the FI) </td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload Fiserv will assume a default value of ‘1’ if the element and associated value are not passed in the payload
                </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="18">RETURN_URL </br>Client will pass to Fiserv? _____</td>
                    <td>Specifies the URL the Client would like the end user redirected to when the end user’s session times out on the Fiserv side</br>Usage Restrictions </br>Is an optional payload parameter Associated value must be a valid URL </td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload If the parameter is not present or the associate value is blank, then Fiserv will redirect the end user to the Client’s home page when the end user’s session times out
                </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="18">CSR_ID </br>Client will pass to Fiserv? _____</td>
                    <td>TN Call Center specific element</br>Specifies the user ID of the client representative who is signing in to the Transfer Now Call Center. This is the user ID that the Client would have assigned when they created the Compass User </br>Usage Restrictions</br> Is an optional payload parameter Associated value must be a valid alphanumeric with a maximum length of 20</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload If the parameter is not present or the associate value is blank and the application code is TNCC, Fiserv will display error SS122 If the parameter is present, but the csr_id passed cannot be located within Fiserv’s Access Management, Fiserv will display error SS123 If the parameter is present, the csr_id was located, but the CSR’s role does not have adequate privileges within the Call Center, Fiserv will display SS124
                </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="18">RECORDING_ID </br>Client will pass to Fiserv? _____</td>
                    <td>TN Call Center specific element</br>Specifies the recording_id of the recorded customer conversation. </br>Usage Restrictions Is an optional payload parameter Associated value must be a valid alphanumeric and cannot exceed 20 characters</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload
                </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="18">LANDING_PAGE </br>Client will pass to Fiserv? _____</td>
                    <td>TN Call Center specific element</br>Specifies the landing page where the CSR will land, upon signing in to the Call Center. This will work only if the CSR has access to the page they are expected to land on. </br>Usage Restrictions</br>Is an optional payload parameterAssociated value must be a valid alphanumeric and cannot exceed 2 characters Possible values are “CT” and “VA”, where CT will land the CSR on the Create Transfer Page and VA will land the CSR on the Verify Accounts Page, respectively.</td>
                </tr>
                <tr>
                    <td>Error Flow </br>Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload Fiserv will use the default landing pages when this element is not populated.
                </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="18">KL_URL </br>Client will pass to Fiserv? _____</td>
                    <td>Specifies the Keep Alive URL of partner. We ping this URL on each of user actions on our UI.</br>Usage Restrictions</br> Is an optional payload parameter Associated value must be a valid URL</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="18">FEE_TIER  </br>Client will pass to Fiserv? _____</td>
                    <td>Specific to only RXP homes.</br>Specifies the fee tier that the user belongs to. It is used to calculate the segment code. </br>Usage Restrictions</br>Is an optional payload parameter Values are</br> 1 – Tier 1 (if no value is passed, we assume tier 1)</br>2 – Tier 2</br>3 – Tier 3</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="18">LANDING_PAGE</td>
                    <td>Transfer Now</br>CEAddAccounts – Navigate to Manage Accounts Page.</br>CETranferAccounts – Navigate to Make Tranfers Page.</br>CEActivity – Navigate to Activity page.</br>CELogOut – Navigate to Logout page.</br>Following values are deprecated: TH, PT, CESeeSummary, CETransferHistory, CEFutureTransfers</td>
                </tr>
            </tbody>
        </table>
</html>





