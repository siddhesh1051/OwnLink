import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ViewsGraph = ({ viewsData }) => {
  if (!viewsData || viewsData.length === 0) {
    return (
      <div className="w-full h-[200px] flex items-center justify-center">
        <div className="text-white opacity-60">No data available</div>
      </div>
    );
  }

  const data = {
    labels: viewsData.map(d => d.date),
    datasets: [
      {
        label: 'Views',
        data: viewsData.map(d => d.views),
        borderColor: 'rgb(147, 88, 249)',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(147, 88, 249, 0.5)');
          gradient.addColorStop(1, 'rgba(147, 88, 249, 0)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(147, 88, 249)',
        pointBorderColor: 'rgb(147, 88, 249)',
        pointHoverBackgroundColor: 'white',
        pointHoverBorderColor: 'rgb(147, 88, 249)',
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(34, 36, 48, 0.9)',
        titleColor: 'rgba(255, 255, 255, 0.9)',
        bodyColor: 'rgba(255, 255, 255, 0.9)',
        padding: 10,
        borderColor: 'rgb(147, 88, 249)',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          stepSize: 1,
          font: {
            size: 11,
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        border: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            size: 11,
          },
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-[200px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default ViewsGraph; 