<html>
  <table style="width: 70%;" class="err-table">
            <thead>
                <tr>
                    <th> Fiserv ePayments Environment</th>
                    <th> Payload Submission URLs </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="1">QA </br></td>
                    <td>https://certsso.ft.cashedge.com/signupGRel?<Payload> </br>
                </tr>
                <tr>
                    <td rowspan="2">Production </br></td>
                    <td>https://sso.fta.cashedge.com/signupGRel?<Payload> </br>
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