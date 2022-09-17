import { useEffect } from "react";
import { useState } from "react";
import { Bar } from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    CategoryScale, 
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} 
from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const Statistic = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        fetch("https://api.github.com/repos/maxuel99/ESERCIZI-JAVASCRIPT/stats/code_frequency")
        .then(response => {
            return response.json()})

        .then(data => {
            // console.log(data)
            setChartData({
                labels: ["12/06", "19/06", "26/06", "03/07", "10/07", "17/07"],
                datasets: [
                {
                    label: "Additions",
                    data: [data[0][1], data[1][1], data[2][1], data[3][1], data[4][1], data[5][1]],
                    borderColor: "rgb(71, 173, 139)",
                    backgroundColor: "rgba(71, 173, 139, 0.6)",
                    stack: 'Stack 0',
                },

                {
                    label: "Deletions",
                    data: [data[0][2], data[1][2], data[2][2], data[3][2], data[4][2], data[5][2]],
                    borderColor: "rgb(17, 32, 82)",
                    backgroundColor: "rgba(17, 32, 82, 0.6)",
                    stack: 'Stack 0',
                }    
            ]
        })

        })
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: "Additions",
                }
            }
        })
    },[])

    return ( 
        <div className="container-statistic" id="statistics">
            <div className="subcontainer">
                <a href="#statistics">
                    <h1>Grafico statistiche Github</h1>
                </a>
                <p>Repository "ESERCIZI-JAVASCRIPT"</p>
                <Bar option={chartOptions} data={chartData}/>
            </div>
        </div>
     );
}
 
export default Statistic;