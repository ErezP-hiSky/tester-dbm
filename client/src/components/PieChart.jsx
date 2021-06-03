import React from 'react';
// import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import '../sass/main.scss';


function PieChart({ failUnits, passUnits }) {
  
  // pie chart
  const pieSeries = [ failUnits, passUnits ];

  const pieOptions = {
    chart: {
      width: 380,
      type: 'pie',
      
    },
    fill: {
      type: 'gradient',
      colors: ['#F44336', '#3ACE1F']
    },
    labels: ['Fail', 'Pass'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

    return (
        <div >
            <div className="pie-chart">
                <h2>Pass / Fail status</h2>
                <ReactApexChart options={pieOptions} series={pieSeries} type="pie" width={380} />
                <p>This pie chart show the relation between fail and pass terminals .</p>
            </div>
        </div>
    );

}

export default PieChart;
