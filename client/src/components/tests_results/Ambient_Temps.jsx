import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../sass/main.scss';
import Spinner from '../layout/Spinner';


function AmbientTempRes({ resultId }) {
    const [tempsResults, setTempsResults] = useState([]);
    const [loading, setLoading] = useState(false);
     
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get(`/ambient-temp/findbyid/${resultId}`);
            setTempsResults(res.data);
            setLoading(false);
        };
        fetchData();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="ambient-temp-div">
                <span>Ambient Temperature :</span>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>                        
                            <th className="ambient-temp-item-id">{tempsResults._id}</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>temp:</td>                        
                            <td className="ambient-temp-item">{tempsResults.ambient_temp}</td>                        
                        </tr>
                    </tbody>
                    
                </table>
                
            </div>
        );
    }
};

export default AmbientTempRes;
