import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import BarChart from "./BarChart";
import Circular from "./Circular";
import LineChart from "./LineChart";
Chart.register(...registerables);
function Statistics() {
  return (
    <div className='step-two-container'>
      <h2 style={{ margin: "1rem 0" }}>Estadísticas</h2>
      <div className='charts'>
        <BarChart />
        <Circular />
        <LineChart />
      </div>
    </div>
  );
}

export default Statistics;
