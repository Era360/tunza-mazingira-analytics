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
        display: false,
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
        backgroundColor: "rgba(21, 80, 57)", // Customize the color
      },
      {
        label: "Sent",
        data: [5, 12, 10, 8, 6],
        backgroundColor: "rgba(96, 190, 146)", // Customize the color
      },
    ],
  };

  return (
    <div className="h-screen bg-tree-700">
      <div className="py-10">
        <div className="mx-auto w-fit">
          <img src="/icon.svg" className="h-28" />
        </div>
        <h2 className="text-2xl font-bold text-center text-tree-50">
          Tunza Mazingira
        </h2>
      </div>
      <div className="w-2/4 p-10 mx-auto rounded-xl bg-tree-50">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}

export default App;
