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
                    <td>Fiserv assigned unique persistent Client identifier (also referred to as the 
Client Home ID) Usage Restrictions Is a required payload parameter Associated value must be numeric and 8 digits in length</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for 
more information):
Fiserv will return an SS28 payload error if the parameter is not present in payload or the associated value length equals 0
Fiserv will display an application SS42 error page if the associated value length is > 0 but < 8, or > 8</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">CE_APPLICATION_CODE</br>Client will pass to Fiserv? _____</td>
                    <td>Client indicates if end user is accessing TransferNow or another Fiserv product.</br>Usage Restrictions
If client sends TN or any other value, end user would be directed to the TransferNow application.</br>If this field is missing, end user would be directed to the TransferNow application. </td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information): </br>N/A</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">USER_FI_NUMBER</br>Client will pass to Fiserv? YES</td>
                    <td>Client assigned unique persistent end user identifier; end user can have only one active profile per Fiserv service </br>Usage Restrictions Is a required payload parameter Associated value should be alphanumeric, 3 to 20 characters in length. It 
can include dashes but not spaces</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for 
more information):</br>Fiserv will return an SS30 payload error if the parameter is not present in payload or the associated value length equals 0</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="3">FIRST_NAME</br>Client will pass to Fiserv? YES</td>
                    <td>End user’s first name. Used for account verification, selected manual 
account verification calls to external institutions, identity information for 
collections, caller identity verification, and COMPASS end user search </br>Usage Restrictions Is a required payload parameter
Associated value must contain alphabetic letters only, 1 to 30 characters in 
length. If 1 character in length, character must be a letter. If > 1 character in 
length, characters can include letters, periods, a single space, apostrophe, 
and/or a hyphen</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)</br>Fiserv will return an SS15 payload error if the parameter is not present in payload or the associated value has a length equal to 0 or is > than 30 characters
Fiserv will display an application SS24 error page if the passed in payload 
parameter value combination of FIRST_NAME, LAST_NAME, SSN, and 
DOB has already been associated with some other USER_FI_NUMBER</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="4">LAST_NAME</br>Client will pass to Fiserv? YES</td>
                    <td>End user’s last name. Used for account verification, selected manual 
account verification calls to external institutions, identity information for 
collections, caller identity verification, and COMPASS end user search  </br>Usage Restrictions 
Is a required payload parameter
Associated value must be alphabetic letters only, 1 to 30 characters in 
length. If 1 character in length, character must be a letter. If > 1 character in 
length, characters can include letters, periods, a single space, apostrophe, 
and/or a hyphen</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)</br>Fiserv will return an SS16 payload error if the parameter is not present in payload or the associated value has a length equal to 0 or is > than 30 characters</br>
Fiserv will display an application SS24 error page if the passed in payload 
parameter value combination of FIRST_NAME, LAST_NAME, SSN, and 
DOB has already been associated with some other USER_FI_NUMBER
</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="5">EMAIL</br>Client will pass to Fiserv? _____</td>
                    <td>End user’s email address. Used as the primary means of communication 
with end user, and in Fiserv fraud detection rules. For example, a change of 
email address in association with increased transfer activity could indicate 
potential fraud activity. </br>Usage Restrictions 
Is an optional payload parameter with restrictions; see Error Flow
Associated value must be alphanumeric, max 100 characters in length. Must 
contain a single @ symbol followed by a single period (.) anywhere after the 
@ symbol</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)</br>Fiserv will display an application SS67 error page if the parameter is not present in payload, the associated value has a length of 0 or is invalid AND 
the Client is not allowing end users to edit or delete email addresses from 
within the application (i.e., the Client has indicated ‘NO’ in DGF Section 4.6). </br>
Fiserv will display an email edit page if the parameter is not present in 
payload, the associated value has a length of 0 or is invalid AND the Client 
is allowing end users to edit or delete email addresses from within the 
application (i.e., the Client has indicated ‘YES’ in DGF Section 4.6) 
</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="6">STREET</br>Client will pass to Fiserv? YES</td>
                    <td>End user’s street address  </br>Usage Restrictions 
Is a required payload parameter
Associated value must be alphanumeric, 1 to 60 characters in length. Can 
include period(.), comma(,), number sign(#), dash(-), slash(/) or space
</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)</br>Fiserv will return an SS19 payload error if the parameter is not present in payload or the associated value has a length equal to 0 or is > than 60 
characters
</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="7">CITY</br>Client will pass to Fiserv? YES</td>
                    <td>City end user lives in </br>Usage Restrictions 
Is a required payload parameter
Associated value must be alphabetic, 1 to 25 characters in length.
</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)</br>Fiserv will return an SS17 payload error if the parameter is not present in payload or the associated value has a length equal to 0 or is > than 25 
characters
</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="8">STATE</br>Client will pass to Fiserv? YES</td>
                    <td>State or US territory end user lives in </br>Usage Restrictions 
Is a required payload parameter
Associated value must be alphabetic letters, 2 characters in length. If 2 
characters, must be valid for state/US territory; full spelling cannot be longer 
than 25 character
</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)</br>Fiserv will return an SS18 payload error if the parameter is not present in payload, the associated value is not a valid state or US territory, or has a length of 0, 1 or > 25 characters
</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="9">ZIP</br>Client will pass to Fiserv? YES</td>
                    <td>End user’s postal ZIP Code </br>Usage Restrictions 
Is a required payload parameter
Associated value must be numeric and 5 digits in length. If more than 5 
digits in length are submitted, then the additional characters will be ignored
</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for more information)</br>Fiserv will return an SS20 payload error if the parameter is not present in payload, or the associated value has a length of < 5 characters or contains one or more non-numeric characters within the first five digit positions
</td>
                </tr>
            </tbody>
             <tbody>
                <tr>
                    <td rowspan="10">SSN</br>Client will pass to Fiserv? YES</td>
                    <td>End user’s Social Security number </br>Usage Restrictions 
Is a required payload parameter
Associated value must be 9 digits in length and can include dashes or 
spaces. If more than 9 digits are submitted, the additional digits will be 
ignored
</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for
                     more information)</br>Fiserv will return an SS14 payload error if the parameter is not present in payload or the associated value has a length equal to 0 </br>
Fiserv will display an application SS24 error page if the passed in payload parameter value combination of FIRST_NAME, LAST_NAME, SSN, and DOB has already been associated with some other USER_FI_NUMBER
</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="11">DOB</br>Client will pass to Fiserv? YES</td>
                    <td>End user’s date of birth </br>Usage Restrictions 
Is a required payload parameter
Associated value must in MM/DD/YYYY format but not equal to 01/01/1901, 
YYYY > 1900, and end user’s calculated age is >= 18 and <= 110
</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for
                     more information)</br>Fiserv will return an SS21 payload error if the parameter is not present in payload, the associated value has a length equal to 0, the end user’s calculated age is < 18 or > 110, or the associated MM/DD/YYYY value is 
equal to 01/01/1901 or YYYY equals 1900 </br>
Fiserv will display an application SS24 error page if the passed in payload parameter value combination of FIRST_NAME, LAST_NAME, SSN, and DOB has already been associated with some other USER_FI_NUMBER
</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="12">PHONE, PHONE2, etc. </br>Client will pass to Fiserv? YES</td>
                    <td>End user’s phone number Client may send multiple phone numbers. Each number should be denoted with a different number; number system starts with no number, then 2, 3, 4… N. </br>Usage Restrictions 
Is a required payload parameter
Associated value is numeric, minimum 10 digits in length. Can include 
spaces or dashes.
</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for
                     more information)</br>Fiserv will return an SS24 payload error if the parameter is not present in payload or the associated value has a length equal to 0
</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="13">PHONE_TYPE, PHONE2_TYPE, etc.</br>Client will pass to Fiserv? _____</td>
                    <td>Describes the type of phone that was sent. Number should match the phone that this value is describing. Number system starts with no number, then 2, 3, 4… N.  
                    </br>Usage Restrictions 
Recognized phone types are: M for Mobile and L for Landline. Any other 
value sent would be stored as is. </br> Maximum 1 character. If more than 1 character, then we discard the value.
If PHONE is not sent, but PHONE_TYPE is sent, then we discard the value.
</td>
                </tr>
                <tr>
                    <td>Error Flow </br>
                    N/A
</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="14">PHONE_USAGE,PHONE2_USAGE, etc. </br>Client will pass to Fiserv?_____</td>
                    <td>Describes the usage of phone that was sent. Number should match the phone that this value is describing. Number system starts with no number, then 2, 3, 4… N. 
                    </br>Usage Restrictions 
Recognized phone usages are: E for Evening, W for Work, D for daytime 
and H for Home. Any other value sent would be stored as is. </br> Maximum 1 character. If more than 1 character, then we discard the value.
If PHONE is not sent, but PHONE_USAGE is sent, then we discard the 
value.
</td>
                </tr>
                <tr>
                    <td>Error Flow (refer to Fiserv Secure Message Exchange Error Handling for
                     more information)</br>
                    N/A
</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="15">MIDDLE_NAME </br>Client will pass to Fiserv? _____</td>
                    <td>User’s middle initial or name Format: 
                    </br>Usage Restrictions 
Is an optional payload parameter </br> Associated value must be alphabetic letters, 1 to 30 characters in length. If 1 character in length, character must be a letter. If more than 1 character in length, characters can include letters, periods, a single space, apostrophe and/or a hyphen
</td>
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
                    </br>Usage Restrictions 
Is an optional payload parameter </br> Associated value must be alphanumeric, 0 to 60 characters in length, and can include a period(.), comma(,), number sign(#), dash(-), slash(/) or space
</td>
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
                    </br>Usage Restrictions 
Is an optional payload parameter but Fiserv strongly suggests Client include parameter and associated value for Risk Management purposes </br> Associated value must be alphanumeric and a maximum of 25 characters in length
</td>
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
                    </br>Usage Restrictions 
Is an optional payload parameter but Fiserv strongly suggests Client include 
parameter and associated value for Risk Management purposes. </br> Associated value must be alphanumeric and a maximum of 25 characters in length
</td>
                </tr>
                <tr>
                    <td>Error Flow </br>
                    Fiserv does not return any payload error code nor display an application error page if the parameter is not present in the payload
                </td>
                </tr>
            </tbody>
        </table>
</html>





