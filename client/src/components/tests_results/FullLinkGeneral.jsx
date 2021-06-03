import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../sass/main.scss';
import Spinner from '../layout/Spinner';


function FLGeneralRes({resultId}) {
    const [FLGeneral, setFLGeneral] = useState([]);
    const [loading, setLoading] = useState(false);
     
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get(`/full-link-general/findbyid/${resultId}`);
            setFLGeneral(res.data);
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
                <h1> FL General Res Details </h1>
                <table className="cur-cons-table">
                    <tbody>
                        {Object.keys(FLGeneral).map((item, i) => 
                            <tr key={i*1}>
                                <td >{item}</td>                            
                                <td >{FLGeneral[item]}</td>                            
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default FLGeneralRes;
