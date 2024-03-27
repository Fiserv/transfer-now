<html>
  <table style="width: 100%;" class="err-table">
            <thead>
                <tr>
                    <th>Payload Error Code</th>
                    <th>Meaning</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="1">SS14</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>
                    <div class="card-body">
                        <ul>
                            <li>The SSN parameter is not present in the payload</li>
                            <li>The associated value has a length of 0 characters</li>
                        </ul>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td rowspan="1">SS15</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>
                    <div class="card-body">
                        <ul>
                            <li>The FIRST_NAME parameter is not present in the payload</li><li> The associated value has a length of 0 or is > than 30 characters.</li>
                        </ul>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td rowspan="1">SS16</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>
                    <div class="card-body">
                        <ul>
                            <li>The LAST_NAME parameter is not present in the payload</li>
                            <li>The associated value has a length of 0 or is > than 30 characters</li>
                        </ul>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td rowspan="1">SS17</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>
                    <div class="card-body">
                        <ul>
                            <li>The CITY parameter is not present in the payload</li><li>The associated value has a length of 0 or is > than 25 characters</li>
                        </ul>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td rowspan="1">SS18</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>
                    <div class="card-body">
                        <ul>
                            <li>The STATE parameter is not present in the payload</li>
                            <li>The associated value is not a valid state or US territory</li>
                            <li>The associated value has length of 0, 1 or > 25 characters</li>
                        </ul>
                    </div></td>
                </tr>
                <tr>
                    <td rowspan="1">SS19</td>
                    <td>Fiserv will return this error code if any of the following are true: </br><div class="card-body">
                        <ul>
                            <li> The STREET parameter is not present in the payload</li><li> The associated value has a length of 0 or is > than 60 characters</li></ul>
                            </div></td>
                </tr>
                <tr>
                    <td rowspan="1">SS20</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>
                        <div class="card-body">
                            <ul>
                                <li>The ZIP parameter is not present in the payload</li>
                                <li>The associated value has a length of < than 5 characters</li>
                                <li>The associated value contains one or more non-numeric characters within the first five digit positions</li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td rowspan="1">SS21</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>
                        <div class="card-body">
                            <ul>
                                <li>The DOB parameter is not present in the payload</li>
                                <li>The associated value has a length of 0</li>
                                <li>The end user’s calculated age is < 18 or > 110</li>
                                <li>The associated MM/DD/YYYY value is equal to 01/01/1901 or YYYY equals 1900</li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td rowspan="1">SS22</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>
                        <div class="card-body">
                            <ul>
                                <li> The PHONE parameter is not present in the payload</li>
                                <li> The associated value has a length of 0</li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td rowspan="1">SS28</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>
                        <div class="card-body">
                                <ul>
                                    <li>The INSTITUTION_ID parameter is not present in the payload</li>
                                    <li>The associated value has a length of 0</li>
                                </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td rowspan="1">SS29</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>
                        <div class="card-body">
                            <ul>
                                <li>The RTN0 parameter is not present in the payload</li>
                                <li>The associated value has a length of 0</li>
                                <li>The associated value is not a valid ABA/routing number</li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td rowspan="1">SS30</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>
                        <div class="card-body">
                            <ul>
                                <li>The USER_FI_NUMBER parameter is not present in the payload</li>
                                <li> The associated value has a length of 0</li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td rowspan="1">SS31</td>
                    <td>Fiserv will return this error code if any of the following are true:</br>
                        <div class="card-body">
                            <ul>
                                <li>The ANUM0 parameter is not present in the payload</li>
                                <li>The associated value has a length of 0</li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td rowspan="1">SSB14</td>
                    <td>EIN is invalid</td>
                </tr>
            </tbody>
        </table>
</html>
<style>
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
       .err-table {
        border-collapse: collapse;
        width: 100%;
        }
        .err-table td, .err-table th {
        border: 1px solid #ddd;
        padding: 8px;
        }
        .err-table th {
            background-color:#f1f1f1
        }
        .err-table tr:nth-child(even){
            background-color: #f2f2f2;
            }
    </style>