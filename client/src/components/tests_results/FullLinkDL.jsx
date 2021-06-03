import React, { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import '../../sass/main.scss';
import axios from 'axios';


function FLdLRes({resultId}) {
    const [fullLinkDLRes, setFullLinkDLRes] = useState([]);
    const [loading, setLoading] = useState(false);
     
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get(`/full-link-dl/findby_testid/${resultId}`);
            setFullLinkDLRes(res.data[0]);
            setLoading(false);
        };
        fetchData();
        // eslint-disable-next-line
    }, [resultId]);
    if (loading) {
        return <Spinner/>
    } else {        
        return (
            <div  >
                <h1> Full Link DownLink Results Details </h1>
                <table className="cur-cons-table">
                    <tbody>
                        {Object.keys(fullLinkDLRes).map((item, i) => 
                            item === "_id" ? null :
                            item === "test_id" ?
                            <tr key={i}>
                                <td >{item}</td>                            
                                <td >{fullLinkDLRes[item]}</td>                            
                            </tr> :
                            fullLinkDLRes[item].map((linkItem, j) => 
                            <tr key={j}>
                                <td >{item}</td>                        
                                <td >{fullLinkDLRes[item][j]}</td>                            
                            </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        );        
    }
};

export default FLdLRes;
