export default function StockSelector({ stocks, value, onChange }) {
  return (
    <select className="stock-select" value={value} onChange={e => onChange(e.target.value)}>
      {Object.entries(stocks).map(([symbol, data]) => (
        <option key={symbol} value={symbol}>
          {symbol} — {data.name}
        </option>
      ))}
    </select>
  );
}
