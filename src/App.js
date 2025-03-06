import React, { useState } from "react";
import "./App.css"; // Подключаем кастомные стили

function App() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleAddTransaction = () => {
    if (!amount || isNaN(amount)) return;
    setTransactions([...transactions, { id: Date.now(), amount: parseFloat(amount), type }]);
    setAmount("");
  };

  const balance = transactions.reduce((acc, transaction) => {
    return transaction.type === "income" ? acc + transaction.amount : acc - transaction.amount;
  }, 0);

  return (
    <div className="container">
      <h1>Личный бюджет 💰</h1>
      <h2>Баланс: {balance.toFixed(2)}₸</h2>
      <div className="input-group">
        <input
          type="number"
          placeholder="Сумма"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Доход</option>
          <option value="expense">Расход</option>
        </select>
        <button onClick={handleAddTransaction}>Добавить</button>
      </div>

      <ul className="transaction-list">
        {transactions.map((t) => (
          <li key={t.id} className={t.type}>
            {t.type === "income" ? "+" : "-"}{t.amount.toFixed(2)}₸
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
