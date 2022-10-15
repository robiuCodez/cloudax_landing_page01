import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  
  datasets: [
    {
      label: "",
      data: [12, 19, 13, 3, 5, 3, 5, 8, 9],
      backgroundColor: [
        "rgba(234, 88, 12, 0.6)",
        "rgba(254, 215, 170, 0.2)",
        "rgba(202, 138, 4, 0.6)",
        "rgba(2, 132, 199, 0.6)",
        "rgba(34, 197, 94, 0.5)",
        "rgba(234, 88, 12, 0.6)",
        "rgba(37, 99, 235, 0.3)",
        "rgba(75, 85, 99, 0.3)",
        "rgba(75, 85, 99, 0.8)",
      ],
      borderColor: [
        "rgba(234, 88, 12, 0.6)",
        "rgba(254, 215, 170, 0.2)",
        "rgba(202, 138, 4, 0.6)",
        "rgba(2, 132, 199, 0.6)",
        "rgba(34, 197, 94, 0.5)",
        "rgba(234, 88, 12, 0.6)",
        "rgba(37, 99, 235, 0.3)",
        "rgba(75, 85, 99, 0.3)",
        "rgba(75, 85, 99, 0.8)",
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => {
  return <Doughnut data={data} />
};

export default DoughnutChart;
