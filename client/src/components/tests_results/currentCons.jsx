import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../sass/main.scss';
import Spinner from '../layout/Spinner';


function CurrentConsumption({resultId}) {
    const [currentConsRes, setCurrentConsRes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        
            const res = await axios.get(`/current-cons/findbyid/${resultId}`);
            setCurrentConsRes(res.data);
            setLoading(false);
        };
        fetchData();
        // eslint-disable-next-line
    }, [resultId]);

    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div className="cur-cons-data-div">
                <span className="current-consumption-header">Current Consumption :</span>
                <br />
                
                <table className="cur-cons-table">
                    <thead>
                        <tr>
                            <th>current parameters:</th>
                            {JSON.stringify(currentConsRes) === '{}' ? <th>"waiting for data ..."</th> :
                                Object.keys(currentConsRes['current_consumption_test']['bat_status'])
                                    .map((item) =>
                                <th key={item} className="current-consumption-table-keys">{item}</th>
                                    )}
                        </tr>
                    </thead>
                    <tbody>                    
                        {JSON.stringify(currentConsRes) === '{}' ? <tr><td>Waiting for data ...</td></tr> :
                        currentConsRes['current_consumption_test']['bat_status']['current'].map((object, i) => 
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    {JSON.stringify(currentConsRes) === '{}' ? <td>Waiting for data ...</td> :
                                        Object.keys(currentConsRes['current_consumption_test']['bat_status']).map((item, ii) =>                                            
                                                <td key={ii + i} className="current-consumption-table-keys">
                                                    {currentConsRes['current_consumption_test']['bat_status'][item][i]}
                                                </td>)}
                                </tr>
                        )}                      
                    </tbody>               
                </table>
                <span className="cur-con-result">Current Consumption result :</span>
                <span>{' '}{JSON.stringify(currentConsRes) === '{}' ? "waiting for data ..." :
                    currentConsRes['current_consumption_test']['current Consumption Test result']}</span>
            </div>
        );
    }
};

export default CurrentConsumption;
