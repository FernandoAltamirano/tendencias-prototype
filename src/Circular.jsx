import React from "react";
import { Pie } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <h4>Tipo de caso</h4>
      <Pie
        data={{
          labels: [
            "Maltrato de pareja íntima",
            "Violencia doméstica",
            "Violencia de noviazgo",
            "Abuso físico",
            "Acoso",
          ],
          datasets: [
            {
              label: "# of votes",
              data: [
                (12 / 41) * 100,
                (19 / 41) * 100,
                (3 / 41) * 100,
                (5 / 41) * 100,
                (2 / 41) * 100,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
