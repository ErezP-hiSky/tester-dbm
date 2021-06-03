import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import '../../sass/main.scss';

function P1dbInFreq({resultId, graphNo}) {

    const [pout, setPout] = useState([]); // 10, 41, 35, 51, 49, 62, 69, 91, 148
    const [tpc, setTpc] = useState([]);   // '1', '2', '3', '4', '5', '6', '7', '8', '9'
    const [freq, setFreq] = useState(29000);
    
    useEffect(() => {
        const fetchData = () => {
            axios.get(`/p1db-pwr-results/findbyid/${resultId}`)
            .then((response)=>{
                const newData = response.data[graphNo];
                const oldTpc = newData['pout_sa'];
                const newTpc = [];
                
                oldTpc.forEach(item => {
                    newTpc.push(item.toFixed(2));
                });
                setPout(newTpc);
                setTpc(newData['tpc_values']);
                setFreq(newData['frequency']);
            }).catch((error) =>{
                // handle error
                console.log("There is an error");
                console.log(error);
            });
        }
        fetchData();
    }, [resultId, graphNo]);

    const series = [{
        name: "Pout as TPC",
        data: pout // [] // Pout-SA
    }];  

    const options = {
        chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
        },
        dataLabels: {
        enabled: false
        },
        stroke: {
        curve: 'straight'
        },
        title: {
        text: 'Pout',
        align: 'left'
        },
        grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
        },
        xaxis: {
            categories: tpc //[], //tpc values
        }
    };

    return (
        <div>
            <h2> Freq - {freq} </h2>
            <ReactApexChart 
                options={options} 
                series={series} 
                type="line" 
                width={600} 
                height={650} />
        </div>
    );
}


export default P1dbInFreq;
