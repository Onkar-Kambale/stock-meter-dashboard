import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Modal.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

export default function LineChartModal({ stock, onClose }) {
  const data = {
    labels: stock.history.map((_, i) => `Point ${i + 1}`),
    datasets: [
      {
        label: stock.symbol,
        data: stock.history,
        borderColor: "#4ade80",
        backgroundColor: "rgba(74, 222, 128, 0.2)",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 4
      }
    ]
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{stock.name} Price Trend</h2>
        <Line data={data} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
