import React, { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import '../../sass/main.scss';
import axios from 'axios';


function FLuLRes({resultId}) {
    const [fullLinkULRes, setFullLinkULRes] = useState([]);
    const [loading, setLoading] = useState(false);
     
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get(`/full-link-ul/findby_testid/${resultId}`);
            setFullLinkULRes(res.data[0]);
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
                <h1> Full Link UpLink Results Details </h1>
                <table className="cur-cons-table">
                    <tbody>
                        {Object.keys(fullLinkULRes).map((item, i) => 
                            item === "_id" ? null :
                            item === "test_id" ?
                            <tr key={i}>
                                <td >{item}</td>                            
                                <td >{fullLinkULRes[item]}</td>                            
                            </tr> :
                            fullLinkULRes[item].map((linkItem, j) => 
                            <tr key={j}>
                                <td >{item}</td>                        
                                <td >{fullLinkULRes[item][j]}</td>                            
                            </tr>
                            )    
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default FLuLRes;
