import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../sass/main.scss';


function ManDetailsDataRes({resultId}) {
    const [manDetails, setManDetails] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            
            const manDetailsData = await axios.get(`/factur-data/findbyid/${resultId}`);
            // console.log(manDetailsData.data);
            setManDetails(manDetailsData.data);
        }
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <h1> Manufacturer Details </h1>
            <table className="cur-cons-table">
                <tbody>
                    {Object.keys(manDetails).map((item, i) =>
                        <tr key={i}>
                            <td className="current-consumption-table-keys" >{item}</td>                            
                            <td className="current-consumption-table-keys" >{manDetails[item]}</td>                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManDetailsDataRes;
