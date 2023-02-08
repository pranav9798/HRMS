import React from 'react';
import swal from 'sweetalert';

export default function RevenueTab() {

    const handleExecuteRevenue = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/revenuetab/executerevenue", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            //   body:JSON.stringify(accountTab)

        }).then(() => {
            console.log("")
            swal({
                title: "Success!",
                text: "Revenue Added Successfully!",
                icon: "success",
                button: "OK!",
            });
        })
    }


    return (
        <div className="centered">
            <tr>
                <td><a href="#" onClick={handleExecuteRevenue}>Execute Complete Revenue</a></td>
                <br></br>
                <td><a href="#" onClick={handleExecuteRevenue}>Execute Adhoc Sync for Revenue
                </a></td>
            </tr>
        </div>


    );

}