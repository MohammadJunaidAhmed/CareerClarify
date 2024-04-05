import Chart from 'chart.js/auto';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';



const TotalOrders = () => {
    const today = new Date();
    const currentDay = 25;
    const labels = [];
    var total = 0;
    for (let i = 1; i <= currentDay; i++) {
        labels.push(`Day ${i}`);
    }
    const data_temp = [];
    for (let i = 0; i < currentDay; i++) {
        var x= Math.floor(Math.random() * 100);
        data_temp.push(x);
        total += x;
    }

    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Orders',
            data: data_temp,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: '#7A7A7A',
            hoverBorderColor: '$000'
          },
        ],
      };
    
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    
      return (
        <div className='w-1/2 bg-[#F5F5F5] p-2 rounded-xl'>
          <h2 className='text-2xl'>Total Orders <span className='font-bold'>{total}</span></h2>
          {/* <Line data={data} options={options} /> */}
          <Bar data={data} options={options}/>
        </div>
      );
}

export default TotalOrders