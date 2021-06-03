import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../sass/main.scss';


function PingStatRes({resultId}) {
    const [pingDataDetails, setPingDataDetails] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            
            const pingData = await axios.get(`/ping-status/findbyid/${resultId}`);
            // console.log(pingData.data);
            setPingDataDetails(pingData.data);
        }
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <h1> Ping Status Details </h1>
            <table className="cur-cons-table">
                <tbody>
                    {Object.keys(pingDataDetails).map((item, i) => 
                        <tr key={i*1}>
                            <td >{item}</td>                            
                            <td >{pingDataDetails[item]}</td>                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PingStatRes;
