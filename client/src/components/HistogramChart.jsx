import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../sass/main.scss';


function HistogramChart({ categories, dataCounted }) {
 
  //data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31]
  // chart options
  const series = [{
    name: 'Terminals',
    data: dataCounted
  }]
  const options = {
    annotations: {
      points: [{
        x: 'GPS',
        seriesIndex: 0,
        label: {
          borderColor: '#775DD0',
          offsetY: 0,
          style: {
            color: '#fff',
            background: '#775DD0',
          },
          text: 'GPS are good',
        }
      }]
    },
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'rounded'  
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
    },
    
    grid: {
      row: {
        colors: ['#fff', '#f2f2f2']
      }
    },
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: categories,
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'Terminals',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      },
    }
  }

    return (
        <div >           
            <div className="column-chart">
                <h2>Fail Distribution</h2>
                <ReactApexChart options={options} series={series} type="bar" height={350} />
                <p>This histogram show how many terminals fail for each test.</p>
            </div>            
        </div>
    );
  
}

export default HistogramChart;
