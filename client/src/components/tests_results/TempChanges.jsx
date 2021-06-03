import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../sass/main.scss';


function TempChangesRes({resultId}) {
    const [TempChangesDetails, setTempChangesDetails] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const searchUrl = `/temp-changes/findbyid/${resultId}`
            const tempChangesData = await axios.get(searchUrl);

            // console.log(tempChangesData.data);
            setTempChangesDetails(tempChangesData.data);
        };
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <h3> The temperature changes from start to end in the temperature test: </h3>
            <table className="cur-cons-table">
                <tbody>
                    <tr>
                        <td>_id</td>
                        <td>{TempChangesDetails['_id']}</td>
                        <td>result</td>
                    </tr>
                    {Object.keys(TempChangesDetails).map((itemKey, i) => 
                        itemKey !== '_id' ?                            
                            Object.keys(TempChangesDetails[itemKey]).map((innerKey, j) =>
                                <tr key={j}>
                                    <td >{itemKey}</td>
                                    <td>{innerKey}</td>
                                    <td>{TempChangesDetails[itemKey][innerKey]}</td>
                                </tr>
                            )  :
                        null 
                    )}
                    
                </tbody>
            </table>
        </div>
    );
};

export default TempChangesRes;
