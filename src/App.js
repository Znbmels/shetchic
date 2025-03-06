import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Импорт стилей Bootstrap

function App() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [balance, setBalance] = useState(0);

  const addTransaction = (type) => {
    if (!amount || isNaN(amount)) return alert("Введите корректную сумму!");

    const newTransaction = {
      id: Date.now(),
      description,
      amount: type === "income" ? +amount : -amount,
    };

    setTransactions([newTransaction, ...transactions]);
    setBalance(balance + newTransaction.amount);

    setAmount("");
    setDescription("");
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-lg">
        <h1 className="text-center">💰 Личный Бюджет</h1>
        <h2 className="text-center">
          Баланс: <span className={balance >= 0 ? "text-success" : "text-danger"}>{balance} ₽</span>
        </h2>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Сумма"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="btn btn-success" onClick={() => addTransaction("income")}>➕ Доход</button>
          <button className="btn btn-danger" onClick={() => addTransaction("expense")}>➖ Расход</button>
        </div>

        <h3 className="text-center">📜 История транзакций:</h3>
        <ul className="list-group">
          {transactions.map((t) => (
            <li key={t.id} className={`list-group-item d-flex justify-content-between ${t.amount > 0 ? "list-group-item-success" : "list-group-item-danger"}`}>
              <span>{t.description}</span>
              <strong>{t.amount} ₽</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
