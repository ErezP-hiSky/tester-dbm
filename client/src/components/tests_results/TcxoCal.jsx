import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../sass/main.scss';


function TcxoCalRes({resultId}) {
    const [tcxoCalDetails, setTcxoCalDetails] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            
            const dbData = await axios.get(`/tcxo-cal/findbyid/${resultId}`);
            // console.log(dbData.data);
            setTcxoCalDetails(dbData.data);
        }
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <h1> Tcxo Calibration Details </h1>
            <table className="cur-cons-table">
                <tbody>
                    {Object.keys(tcxoCalDetails).map((item, i) => 
                        <tr key={i*1}>
                            <td >{item}</td>                            
                            <td >{tcxoCalDetails[item]}</td>                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TcxoCalRes;
