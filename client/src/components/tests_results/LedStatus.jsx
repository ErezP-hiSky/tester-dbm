import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../sass/main.scss';


function LedRes({resultId}) {
    const [ledDetails, setLedDetails] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            
            const ledData = await axios.get(`/led-status/findbyid/${resultId}`);
            // console.log(ledData);
            setLedDetails(ledData.data);
        }
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <h1> Led status </h1>
            <table className="cur-cons-table">
                <tbody>
                    {Object.keys(ledDetails).map((item, i) => 
                        <tr key={i*1}>
                            <td >{item}</td>                            
                            <td >{ledDetails[item]}</td>                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default LedRes;
