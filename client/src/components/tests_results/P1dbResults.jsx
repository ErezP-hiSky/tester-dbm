import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../sass/main.scss';


function P1dbRes({resultId}) {
    const [p1dbDetails, setP1dbDetails] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            
            const dbData = await axios.get(`/p1db-results/findbyid/${resultId}`);
            // console.log(dbData.data);
            setP1dbDetails(dbData.data);
        }
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <h1> p1db Details </h1>
            <table className="cur-cons-table">
                <tbody>
                    {Object.keys(p1dbDetails).map((item, i) => 
                        item === "_id" ?
                        <tr key={i * 1}>
                            <td >{item}</td>                            
                            <td >{p1dbDetails[item]}</td>                            
                        </tr> :
                        item === "start_time" ?
                        <tr key={i * 1}>
                            <td >{item}</td>                            
                            <td >{p1dbDetails[item]}</td>                            
                                </tr> :
                        item === "end_time" ?
                        <tr key={i * 1}>
                            <td >{item}</td>                            
                            <td >{p1dbDetails[item]}</td>                            
                        </tr> :
                        item === "freqs" ?
                            p1dbDetails[item].map((freqItem, i) =>
                                <tr key={i}>
                                    <td>frequency {' '} { i}</td>
                                    <td >{freqItem}</td>
                                </tr>
                                )
                                : 
                        item === "p1db" ?
                            p1dbDetails[item].map((freqItem, i) =>
                                <tr key={i}>
                                    <td>p1db {' '} { i}</td>
                                    <td >{freqItem}</td>
                                </tr>
                                )
                                :
                        item === "p1db_Rftemp" ?
                            p1dbDetails[item].map((freqItem, i) =>
                                <tr key={i}>
                                    <td>p1db RF temperature {' '} { i}</td>
                                    <td >{freqItem}</td>
                                </tr>
                                )
                                : 
                        item === "p1db_pout" ?
                            p1dbDetails[item].map((freqItem, i) =>
                                <tr key={i}>
                                    <td>p1db P-out {' '} { i}</td>
                                    <td >{freqItem}</td>
                                </tr>
                                )
                                :
                        item === "status" ?
                            <tr key={i * 1}>
                                <td >{item}</td>                            
                                <td >{p1dbDetails[item]}</td>                            
                            </tr> : null
                                
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default P1dbRes;
