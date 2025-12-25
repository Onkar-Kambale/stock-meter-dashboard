import "./Gauge.css";

export default function Gauge({ stock, onClick }) {
  const percentage =
    ((stock.current - stock.min) / (stock.max - stock.min)) * 180 - 90;

  return (
    <div className="gauge-card" onClick={onClick}>
      <h3>{stock.symbol}</h3>

      <div className="gauge">
        <div className="arc" />
        <div
          className="needle"
          style={{ transform: `rotate(${percentage}deg)` }}
        />
        <div className="center-dot" />
      </div>

      <p className="price">${stock.current}</p>
      <span className="company">{stock.name}</span>
    </div>
  );
}
