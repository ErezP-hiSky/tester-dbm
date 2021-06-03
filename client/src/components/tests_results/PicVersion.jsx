import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../sass/main.scss';


function PicVersionRes({resultId}) {
    const [picVersionData, setPicVersionData] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            
            const picVersionData = await axios.get(`/pic-version/findbyid/${resultId}`);
            // console.log(picVersionData);
            setPicVersionData(picVersionData.data);
        }
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <h2> Pic version Details </h2>
            <table className="cur-cons-table">
                <tbody>
                    {Object.keys(picVersionData).map((item, i) => 
                        <tr key={i*1}>
                            <td >{item}</td>                            
                            <td >{picVersionData[item]}</td>                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PicVersionRes;
