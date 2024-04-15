// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import rightArrow from "../../../../assets/right-arrow.png"



const TotalOrders = () => {
    // const today = new Date();
    const currentDay = 30;
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
        },
      };
    
      return (
        <div className='w-2/5 bg-[#F5F5F5] p-2 rounded-xl'>
          <h2 className='text-2xl px-3 pt-2'>Total Orders <span className='font-bold'>{total}</span></h2>
          {/* <Line data={data} options={options} /> */}
          <Bar data={data} options={options}/>
          <h1 className='flex justify-center items-center py-1 cursor-pointer'>View Detailed report <img src={rightArrow} className='px-2'/></h1>
        </div>
      );
}

export default TotalOrders