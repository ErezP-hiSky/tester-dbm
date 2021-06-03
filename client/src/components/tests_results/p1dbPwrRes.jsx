import React, { useEffect, useState } from 'react';
import axios from 'axios';
import P1dbInFreq from './p1dBPwrNfreq.jsx';
import '../../sass/main.scss';

function P1dbPwrGraph({ resultId }) {
    
    const [p1dbResults, setP1dbResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`/p1db-pwr-results/findbyid/${resultId}`) 
                .then((response) => {
                    const newData = response.data;
                    setP1dbResults(newData);                    
                })
                .catch((error) => {
                    // handle error
                    console.log("There is an error");
                    console.log(error);
                });
        }
        fetchData();
    }, [resultId])

    

    return (
        <div>
            <h1>P1 db graphs</h1>
            {JSON.stringify(p1dbResults) === undefined ? <h1>empty</h1> :
                p1dbResults.map((p1dbItem,i) => 
                    <P1dbInFreq key={i} resultId={resultId} graphNo={i}/>
            )}
        </div>
    );
}

export default P1dbPwrGraph;
