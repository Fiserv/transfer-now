<html>
  <table style="width: 100%;">
            <thead>
                <tr>
                    <th> Card Account Profile Parameter</th>
                    <th> Description, Usage Restriction, and error flow </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">SS14</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>• The SSN parameter is not present in the payload</br>• The associated value has a length of 0 characters</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SS15</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>• The FIRST_NAME parameter is not present in the payload</br>• The associated value has a length of 0 or is > than 30 characters.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SS16</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>• The LAST_NAME parameter is not present in the payload</br>• The associated value has a length of 0 or is > than 30 characters</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SS17</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>• The CITY parameter is not present in the payload</br>• The associated value has a length of 0 or is > than 25 characters</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SS18</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>• The STATE parameter is not present in the payload</br>• The associated value is not a valid state or US territory</br>• The associated value has length of 0, 1 or > 25 characters</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SS19</td>
                    <td>Fiserv will return this error code if any of the following are true: </br>• The STREET parameter is not present in the payload</br>• The associated value has a length of 0 or is > than 60 characters</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SS20</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>• The ZIP parameter is not present in the payload</br>• The associated value has a length of < than 5 characters</br>• The associated value contains one or more non-numeric characters within the first five digit positions</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SS21</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>• The DOB parameter is not present in the payload</br>• The associated value has a length of 0</br>• The end user’s calculated age is < 18 or > 110</br>• The associated MM/DD/YYYY value is equal to 01/01/1901 or YYYY equals 1900</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SS22</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>• The PHONE parameter is not present in the payload</br>• The associated value has a length of 0</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SS28</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>• The INSTITUTION_ID parameter is not present in the payload</br>• The associated value has a length of 0</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SS29</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>• The RTN0 parameter is not present in the payload</br>• The associated value has a length of 0</br>• The associated value is not a valid ABA/routing number</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SS30</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>• The USER_FI_NUMBER parameter is not present in the payload</br>• The associated value has a length of 0</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SS31</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>• The ANUM0 parameter is not present in the payload</br>• The associated value has a length of 0</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">SSB14</td>
                    <td>EIN is invalid</td>
                </tr>
            </tbody>
        </table>
</html>