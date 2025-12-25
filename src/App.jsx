import { useState } from "react";
import { stockDataset } from "./data/stockData";
import useLiveStock from "./hooks/useLiveStock";
import StockMeter from "./components/StockMeter";
import LineChartModal from "./components/LineChartModal";
import "./index.css";

export default function App() {
  const symbols = Object.keys(stockDataset);
  const [selectedStocks, setSelectedStocks] = useState(symbols.slice(0, 3));
  const [chartStock, setChartStock] = useState(null);

  function toggleStock(symbol) {
    setSelectedStocks(prev =>
      prev.includes(symbol)
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Market Watch Dashboard</h1>
        <p>Real-time stock monitoring</p>
      </header>

      {/* STOCK FILTER */}
      <div className="filter-bar">
        {symbols.map(symbol => (
          <button
            key={symbol}
            className={
              selectedStocks.includes(symbol)
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => toggleStock(symbol)}
          >
            {symbol}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid">
        {selectedStocks.map(symbol => {
          const stock = stockDataset[symbol];
          const { price, history } = useLiveStock(stock);

          return (
            <div key={symbol} className="stock-card">
              <h2>{symbol}</h2>
              <span className="company">{stock.name}</span>

              <div className="price">${price}</div>

              <StockMeter
                price={price}
                min={stock.min}
                max={stock.max}
              />

              <button
                className="trend-btn"
                onClick={() =>
                  setChartStock({ symbol, history })
                }
              >
                View Trend
              </button>
            </div>
          );
        })}
      </div>

      {chartStock && (
        <LineChartModal
          symbol={chartStock.symbol}
          history={chartStock.history}
          onClose={() => setChartStock(null)}
        />
      )}
    </div>
  );
}
