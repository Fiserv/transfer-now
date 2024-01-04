## Fund Transfer Frequencies/Duration

TransferNow supports the weekly and monthly frequencies.
&nbsp;

<style>
        .flowchart-parent {
            height: 350px;
           border: 2px solid rgba(223, 218, 218, 0.002);
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
            background-color: rgba(244, 241, 241, 0);
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
           border: 3px solid rgba(224, 217, 217, 0);
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
         border: 3px solid rgba(224, 217, 217, 0);
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
          border: 3px solid rgba(224, 217, 217, 0);
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
                    <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/weekly-transfer-updated.png" style="height:300px;width:300px;">
                </div>
                <div class="flowchart-child2">
                    <p><b style="text-align: center;">Weekly Transfer</b></p>
                    <ul>
                        <li>Every week</li>
                        <li>Every two week</li>
                        <li>Every three week</li>
                        <li>Every four week</li>
                        <li>Every 15 days</li>
                    </ul>
                </div>
        </div>
        <div class="flowchart-parent2">
            <div class="flowchart-child3">
                <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/monthly-transfer-updated.png" style="height:300px;width:300px;">
            </div>
            <div class="flowchart-child4">
                <p><b style="text-align: center">Monthly Transfer</b></p>
                <ul>
                    <li>Every month.</li>
                    <li>Every two month.</li>
                    <li>Every three week.</li>
                    <li>Every six week.</li>
                    <li>First business day of the month.</li>
                    <li>Last business day of the month.</li>
                </ul>
            </div>
        </div>
        <div class="flowchart-parent3">
            <div class="flowchart-child5">
                <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/durations-updated.png" style="height:300px;width:300px;">
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
    <style>
        .drag-arrow
        {
            display:flex;
            margin-left:40px;
            gap:10px;
        }
    </style>
<div class="drag-arrow">
            <b  style="font-size:x-small">DRAG IT !</b>
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/arrow-right.png" style="width:15px;height:15px;"> 
    </div>

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



