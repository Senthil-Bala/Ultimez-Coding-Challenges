import React, { useState } from "react";

function SalesCalculator() {
  const [inputValue, setInputValue] = useState("");
  const [sales, setSales] = useState([]);
  const [totalSalePrice, setTotalSalePrice] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addSale = () => {
    if (inputValue !== "") {
      const sale = parseFloat(inputValue);
      if (!isNaN(sale)) {
        const profit = sale * 0.2; // Assuming 20% profit
        setSales([...sales, { sale, profit }]);
        setTotalSalePrice(totalSalePrice + sale);
        setTotalProfit(totalProfit + profit);
        setInputValue("");
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter sale price"
      />
      <button onClick={addSale}>Add Sale</button>

      <div>
        <h2>Sales List</h2>
          {sales.map((sale, index) => (
            <li key={index}>
              Sale Price: {sale.sale} | Profit: {sale.profit}
            </li>
          ))}
      </div>

      <div>
        <p>Total Sale Price: {totalSalePrice}</p>
        <p>Total Profit: {totalProfit}</p>
      </div>
    </div>
  );
}

export default SalesCalculator;
