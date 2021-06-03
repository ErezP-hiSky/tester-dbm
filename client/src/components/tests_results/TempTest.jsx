
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import '../../sass/main.scss';


function TempTestRes({resultId}) {
    const [TempTestdata, setTempTestdata] = useState({});
    const [loading, setLoading] = useState(false);
   
    useEffect(() => {
       
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get(`/temp/findbyid/${resultId}`);
            const newData = res.data;
            setTempTestdata(newData);
            setLoading(false);
        }
        fetchData();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner/>
    } else if (TempTestdata.length === 0) {
        return <h5> No temperature data for this unit </h5>
    } else {
        return (
            <div className="cur-cons-data-div">
                <span className="current-consumption-header">Temperature Test Results :</span>
                <br />
                
                <table className="cur-cons-table">
                    <thead>
                        <tr>
                            <th>current parameters:</th>
                            {JSON.stringify(TempTestdata) === '{}' ? <th>Waiting for data ...</th> :
                                Object.keys(TempTestdata['temp_test']['bat_status'])
                                    .map((item) =>
                                <th key={item} className="current-consumption-table-keys">{item}</th>
                                    )}
                        </tr>
                    </thead>
                    <tbody>                    
                        {JSON.stringify(TempTestdata) === '{}' ? <tr><td>Waiting for data ...</td></tr> :
                        TempTestdata['temp_test']['bat_status']['current'].map((object, i) => 
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    {JSON.stringify(TempTestdata) === '{}' ? <td>Waiting for data ...</td> :
                                        Object.keys(TempTestdata['temp_test']['bat_status']).map((item, ii) =>                                            
                                                <td key={ii + i} className="current-consumption-table-keys">
                                                    {TempTestdata['temp_test']['bat_status'][item][i]}
                                                </td>)}
                                </tr>
                        )}                      
                    </tbody>               
                </table>
                <span className="cur-con-result">Temperature Test result :</span>
                <span>{' '}{JSON.stringify(TempTestdata) === '{}' ? "waiting for data ..." :
                    TempTestdata['temp_test']['Temp Test result']}</span>
            </div>
        );
    }
};

export default TempTestRes;
