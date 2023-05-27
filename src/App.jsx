import { useState, useEffect } from "react";
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
  const [thedata, setthedata] = useState([]);
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

  useEffect(() => {
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

    setTimeout(() => {
      setthedata(data);
    }, 2000);
  }, []);

  // const handleFetching = async () => {
  //   let response = await fetch("", {
  //     method: "GET",
  //   });
  //   let the_response = await response.json();
  // };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-tree-700">
      <div className="flex flex-col gap-3">
        <div className="mx-auto w-fit">
          <img src="/icon.svg" className="h-28" />
        </div>
        <h2 className="text-2xl font-bold text-center text-tree-50">
          Tunza Mazingira
        </h2>
      </div>
      <div className="w-2/4 p-10 mx-auto rounded-xl bg-tree-50">
        {thedata.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <svg className="w-8 h-8 animate-spin" viewBox="0 0 24 24">
              <circle
                className="stroke-tree-800"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                strokeWidth="4"
                strokeDasharray="30"
                strokeLinecap="round"
              />
            </svg>
          </div>
        ) : (
          <Bar options={options} data={thedata} />
        )}
      </div>
    </div>
  );
}

export default App;
