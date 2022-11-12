import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "",
      data: [25, 12, 18, 12, 5, 3, 3, 6, 9],
      backgroundColor: [
        "#4C53F7",
        "#FFEFCA",
        "#F7B34C",
        "#4CF7CE",
        "#A0E1A5",
        "#FC9265",
        "#D868FF",
        "#DBE3F1",
        "#353F4F",
      ],
      borderColor: [
        "#4C53F7",
        "#FFEFCA",
        "#F7B34C",
        "#4CF7CE",
        "#A0E1A5",
        "#FC9265",
        "#D868FF",
        "#DBE3F1",
        "#353F4F",
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => {
  return (
    <div className="w-full h-full">
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
