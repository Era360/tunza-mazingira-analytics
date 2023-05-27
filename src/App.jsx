import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "The Graph",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = {
    labels: [
      "2023-05-01",
      "2023-05-02",
      "2023-05-03",
      "2023-05-04",
      "2023-05-05",
    ],
    datasets: [
      {
        label: "received",
        data: [10, 15, 8, 12, 7],
        backgroundColor: "rgba(21, 80, 57, 0.5)", // Customize the color
      },
      {
        label: "Sent",
        data: [5, 12, 10, 8, 6],
        backgroundColor: "rgba(180, 230, 202, 0.5)", // Customize the color
      },
    ],
  };

  return (
    <div className="container w-3/4 mx-auto">
      <img src="/icon.svg" className="h-48" />
      <h2>Bar Graph</h2>
      <Bar options={options} data={data} />
    </div>
  );
}

export default App;
