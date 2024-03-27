<html>
 <table style="width: 100%;" class="err-table">
            <thead>
                <tr>
                    <th> Application Error Code</th>
                    <th> Displayed Error Message </th>
                    <th>Meaning</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="1">SS23</td>
                    <td>Unable to access the TN service at this time</td>
                    <td>Fiserv will display this error code and message in an application error page if the TN service is accessible but the required user data cannot be retrieved from the back-end database.</td>
                </tr>
                <tr>
                    <td rowspan="1">SS24</td>
                    <td>Your profile is already registered</td>
                    <td>The passed in payload parameter value combination of FIRST_NAME, LAST_NAME, SSN, and DOB has already been associated with some other USER_FI_NUMBER</td>
                </tr>
                <tr>
                    <td rowspan="1">SS25</td>
                    <td>Your account is locked</td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="1">SS40</td>
                    <td>Unable to authenticate, please log in again.</td>
                    <td>Submitted session key is null</td>
                </tr>
                <tr>
                    <td rowspan="1">SS41</td>
                    <td>Unable to authenticate, please log in again.</td>
                    <td>Submitted session key is invalid</td>
                </tr>
                <tr>
                    <td rowspan="1">SS42</td>
                    <td>Unable to authenticate, please log in again.</td>
                    <td>General application error</td>
                </tr>
                <tr>
                    <td rowspan="1">SS67</td>
                    <td>Missing or invalid email</td>
                    <td>The email parameter is not present in payload, the associated value has a length of 0 or is invalid AND the Client is not allowing end users to edit or delete email addresses from within the TN application.</td>
                </tr>
            </tbody>
        </table>
</html>
<style>
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
        .err-table tr:nth-child(even){background-color: #f2f2f2;}
    </style>