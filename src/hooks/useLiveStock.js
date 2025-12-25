import { useEffect, useState } from "react";

export default function useLiveStock(stock) {
  const [price, setPrice] = useState(stock.history.at(-1));
  const [history, setHistory] = useState(stock.history);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => {
        const delta = (Math.random() - 0.5) * 4;
        const next = Math.max(
          stock.min,
          Math.min(stock.max, prev + delta)
        );

        setHistory(h => [...h.slice(-19), Number(next.toFixed(2))]);
        return Number(next.toFixed(2));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [stock]);

  return { price, history };
}
