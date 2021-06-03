import React, { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import '../../sass/main.scss';
import axios from 'axios';


function GuiDataRes({resultId}) {
    const [guiDetails, setGuiDetails] = useState([]);
    const [loading, setLoading] = useState(false);
     
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get(`/gui-data/findbyid/${resultId}`);
            setGuiDetails(res.data);
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
                <h1> Data user input in ui Details </h1>
                <table className="cur-cons-table">
                    <tbody>
                        {Object.keys(guiDetails).map((item, i) => 
                            <tr key={i*1}>
                                <td >{item}</td>                            
                                <td >{guiDetails[item]}</td>                            
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }    
};

export default GuiDataRes;
