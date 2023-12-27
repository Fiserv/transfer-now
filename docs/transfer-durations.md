## Fund Transfer Frequencies/Duration

TransferNow supports the weekly and monthly frequencies.
&nbsp;

 <style>
        .flowchart-parent {
            height: 350px;
            border: 2px solid rgb(223, 218, 218);
            padding: 5px;
            border-radius: 5px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            gap: 7px;
            margin-left: 0px;
            align-items: center;
            justify-content: space-evenly;
            box-sizing: border-box;
            overflow-x: scroll;
            background-color: rgb(244, 241, 241);
        }
        .flowchart-parent::-webkit-scrollbar {
            display: none;
        }
        .flowchart-parent {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .flowchart-parent1
        {
            display: flex;
            flex-direction: column;
            border: 3px solid rgb(224, 217, 217);
            border-radius: 10px;
            width: 335px;
            height: 335px;
            gap: 5px;
            background-color: white;
            align-items: center;
            justify-content: center;
        } 
        .flowchart-parent2
        {
            display: flex;
            flex-direction: column;
            border: 3px solid rgb(224, 217, 217);
            border-radius: 10px;
            width: 335px;
            height: 335px;
            gap: 5px;
            background-color: white;
            align-items: center;
            justify-content: center;
        } 
        .flowchart-parent3
        {
            display: flex;
            flex-direction: column;
            border: 3px solid rgb(224, 217, 217);
            border-radius: 10px;
            width: 335px;
            height: 335px;
            gap: 5px;
            background-color: white;
            align-items: center;
            justify-content: center;
        } 
        .flowchart-child1
        {
            flex-direction: row;
        }
        .flowchart-child3   
        {
            flex-direction: row;
        }
        .flowchart-child5  
        {
            flex-direction: row;
        }
        .flowchart-child2
        {
            display: none;
            flex-direction: column;
        }
        .flowchart-child4
        {
            display: none;
            flex-direction: column;
        }
        .flowchart-child6
        {
            display: none;
            flex-direction: column;
        }
        p{
            align-self: center;
        }
        .flowchart-parent ul li::before 
        {
            content: "\2022";
            font-size: 1em;
            color: #f60;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }
        .flowchart-parent1:hover
        {
            .flowchart-child1
                {
                    display: none ;
                }
            .flowchart-child2
                {
                    display: flex;
                }
        }
        .flowchart-parent2:hover
        {
            .flowchart-child3
                {
                    display: none ;
                }
            .flowchart-child4
                {
                    display: flex;
                }
        }
        .flowchart-parent3:hover
        {
            .flowchart-child5
                {
                    display: none ;
                }
            .flowchart-child6
                {
                    display: flex;
                }
        }
    </style>
<div class="flowchart-parent">
        <div class="flowchart-parent1">                       
                <div class="flowchart-child1">
                    <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/weekly-transfer-frequencies.png" style="height:300px;width:300px;">
                </div>
                <div class="flowchart-child2">
                    <p><b style="text-align: center;">Weekly Transfer</b></p>
                    <ul>
                        <li>Every Week</li>
                        <li>Every Two Week</li>
                        <li>Every Three Week</li>
                        <li>Every Four Week</li>
                        <li>Every 15 Days</li>
                    </ul>
                </div>
        </div>
        <div class="flowchart-parent2">
            <div class="flowchart-child3">
                <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/monthly-transfer-frequencies.png" style="height:300px;width:300px;">
            </div>
            <div class="flowchart-child4">
                <p><b style="text-align: center">Monthly</b></p>
                <ul>
                    <li>Every Month.</li>
                    <li>Every Two Month.</li>
                    <li>Every Three Week.</li>
                    <li>Every Six Week.</li>
                    <li>First Business Day Of The Month.</li>
                    <li>Last Business Day Of The Month.</li>
                </ul>
            </div>
        </div>
        <div class="flowchart-parent3">
            <div class="flowchart-child5">
                <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/duration-transfer-frequencies.png" style="height:300px;width:300px;">
            </div>
            <div class="flowchart-child6">
                    <p><b style="text-align: center;">Durations</b></p>
                <ul>
                    <li>Until a specified number of transactions are made.</li>
                    <li>Until cancelled by the user.</li>
                    <li>Up to but not after a specified date.</li>
                    <li>Until a specified dollar amount is transfered.</li>
                </ul>
            </div>
        </div>
    </div>
    </br>

## Transfer Cut-off times 
&nbsp;

For each client, Fiserv sets the appropriate time zone for the Standard cutoff time and for the Next-Day 
cutoff time (for those clients who offer Next-Day transfer service). Clients may alter the time zone 
settings via the DGF. 

&nbsp;
        <style>
            th,td{
                text-align: center;
                border: 1px solid black;
                border-collapse:collapse;
                padding: 5px 5px 5px 5px;
            }
            table
            {
                text-align: center;
                border: 1px solid black;
                border-collapse:collapse;
                margin-right: auto;
                margin-left: auto ;
            }
        </style>
        <div style="text-align: center;">
            <table style="display:inline-table">
                    <tr>
                        <th colspan="6" style="background-color: orange;"><b>STANDARD CUTOFF TIME</b></th>
                    </tr>
                    <tr style="background-color: rgb(251, 214, 133);">
                        <th><b>ET</b></th>
                        <th><b>CT</b></th>
                        <th><b>MT</b></th>
                        <th><b>PT</b></th>
                        <th><b>AKT</b></th>
                        <th><b>HT</b></th>
                    </tr>
                    <tr>
                        <td>01:00 AM</td>
                        <td>12:00 AM</td>
                        <td>11:00 PM</td>
                        <td>10:00 PM</td>
                        <td>09:00 AM</td>
                        <td>07:00 PM</td>
                    </tr>
                <tbody>
                </tbody>
            </table>
        </div>
&nbsp;
<div class="card-body">
    <ul>
        <li> An asterisk is displayed next to the Standard cutoff time. (i.e., 1 AM ET*) </li>
    </ul>
</div> 

&nbsp;

<!-- theme: info -->

 > :memo:_**Note:** If a client has specified the ET time zone for display of the Standard cutoff time, TransferNow includes an asterisk and a footnote on the screen._

 &nbsp;
<!-- theme: info -->

 > :memo:_**Note:** There are no cutoff times for Instant Transfers, as Instant Transfers will leverage the NOW network. ACH cutoff times and limitations do not apply to Instant Transfers._

&nbsp;





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
</style>



