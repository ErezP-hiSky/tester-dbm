import React, { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import '../../sass/main.scss';
import axios from 'axios';


function FLCrossPollRes({resultId}) {
    const [flCrossPollRes, setFlCrossPollRes] = useState([]);
    const [loading, setLoading] = useState(false);
     
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get(`/fl-cross-poll/findbyid/${resultId}`);
            setFlCrossPollRes(res.data);
            setLoading(false);
        };
        fetchData();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div  >
                <h1> FL cross poll Details </h1>
                <table className="cur-cons-table">
                    <tbody>
                        {Object.keys(flCrossPollRes).map((item, i) => 
                            <tr key={i*1}>
                                <td >{item}</td>                            
                                <td >{flCrossPollRes[item]}</td>                            
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default FLCrossPollRes;
