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
  const [fallBackData, setfallBackData] = useState({
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
  });
  const [fetched, setfetched] = useState(false);
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

  const transformDataForChart = (data) => {
    const formattedData = [];
    for (const date in data) {
      if (data.hasOwnProperty(date)) {
        const dataPoint = {
          date: date["SMSMessageData"]["Message"],
          sent: data["SMSMessageData"]["Message"]["sent"],
          received: data["SMSMessageData"]["Message"]["received"],
        };
        formattedData.push(dataPoint);
      }
    }
    return formattedData;
  };

  useEffect(() => {
    const handleFetching = async () => {
      try {
        let response = await fetch("http://127.0.0.1:5000/informations", {
          method: "GET",
        });
        let the_response = await response.json();
        const formattedData = transformDataForChart(the_response);
        console.log(formattedData);
        setthedata(formattedData);
        setfetched(true);
        console.log("success");
        // setthedata({
        //   labels: [...Object.keys(the_response)],
        //   datasets: [
        //     {
        //       label: "received",
        //       data: [10, 15, 8, 12, 7],
        //       backgroundColor: "rgba(21, 80, 57)", // Customize the color
        //     },
        //     {
        //       label: "Sent",
        //       data: [5, 12, 10, 8, 6],
        //       backgroundColor: "rgba(96, 190, 146)", // Customize the color
        //     },
        //   ],
        // })
      } catch (error) {
        console.log(error.message);
        let cachedata = {
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
        setthedata(cachedata);
        setfetched(true);
      }
    };

    if (thedata.length === 0 && !fetched) {
      // handleFetching();
      console.log("Fetching...");
    }

    // setTimeout(() => {
    //   setthedata(data);
    // }, 2000);
  }, []);

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
        {/* {thedata.length === 0 ? (
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
          )} */}
        <Bar
          options={options}
          data={fallBackData}
          // data={{
          //   labels: thedata.map((dataPoint) => dataPoint.date),
          //   datasets: [
          //     {
          //       label: "Sent",
          //       data: thedata.map((dataPoint) => dataPoint.sent),
          //       backgroundColor: "rgba(75, 192, 192, 0.5)", // Customize the color
          //     },
          //     {
          //       label: "Received",
          //       data: thedata.map((dataPoint) => dataPoint.received),
          //       backgroundColor: "rgba(255, 99, 132, 0.5)", // Customize the color
          //     },
          //   ],
          // }}
        />
      </div>
    </div>
  );
}

export default App;
