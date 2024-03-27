<html>
  <table style="width: 70%;" class="err-table">
            <thead>
                <tr>
                    <th><b>Session Key Expiration</b></th>
                    <th><b>Description</b></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2"><b>Payload Session Key Expiration Period</b></br></td>
                    <td><b>For Fiserv ePayments QA Environment</b> </br>
                        <div class="card-body">
                        <ul>
                            <li>Client wishes session key to be valid only for 5 minutes (default) </li>
                        </ul>
                        </div></br>
                        <b>For Fiserv ePayments Production Environment</b></br>
                        <div class="card-body">
                        <ul>
                        <li>Client wishes session key to be valid only for 5 minutes (default)</li>
                        </ul>
                        </div></td>
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
</style>
