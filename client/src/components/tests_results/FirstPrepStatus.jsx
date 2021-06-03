import React, { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import '../../sass/main.scss';
import axios from 'axios';


function FirstPrepStatRes({resultId}) {
    const [firstPrepStatDetails, setFirstPrepStatDetails] = useState([]);
    const [loading, setLoading] = useState(false);
     
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get(`/first-prep-stat/findbyid/${resultId}`);
            setFirstPrepStatDetails(res.data);
            setLoading(false);
        };
        fetchData();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div  >
                <h1> Data First prep results Details </h1>
                <table className="cur-cons-table">
                    <tbody>
                        {Object.keys(firstPrepStatDetails).map((item, i) => 
                            <tr key={i*1}>
                                <td >{item}</td>                            
                                <td >{firstPrepStatDetails[item]}</td>                            
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default FirstPrepStatRes;
