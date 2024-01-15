import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { defaults } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    }
};

function HourlyTemperatureChart(props) {
    defaults.color = '#75787d'
    defaults.font.size = 24
    defaults.scale.grid.display = false
    defaults.scale.ticks.precision = 0
    defaults.hover.intersect = false
    defaults.plugins.tooltip.mode = 'nearest'
    defaults.plugins.tooltip.intersect = false
    defaults.plugins.tooltip.titleAlign = 'center'

    const labels = props.time
    const data = {
        labels,
        datasets: [
            {
                label: 'Temperatura',
                data: props.temperature,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
      };
    return <Line options={options} data={data} />;
}

export default HourlyTemperatureChart;
