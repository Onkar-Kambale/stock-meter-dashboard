import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

export default function LineChartModal({ symbol, history, onClose }) {
  const data = {
    labels: history.map((_, i) => `T${i + 1}`),
    datasets: [
      {
        label: symbol,
        data: history,
        borderWidth: 3,
        tension: 0.4
      }
    ]
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{symbol} Price Trend</h2>
        <Line data={data} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
