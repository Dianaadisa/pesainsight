import { useTransactions } from "../context/TransactionContext";

function Dashboard() {
  const { transactions } = useTransactions();

  // Example CSV columns assumed:
  // amount, type (income/expense)

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount || 0), 0);

  const expenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount || 0), 0);

  const balance = income - expenses;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="mt-6 space-y-3">
        <div className="p-4 bg-green-100 rounded-xl">
          Income: KES {income}
        </div>

        <div className="p-4 bg-red-100 rounded-xl">
          Expenses: KES {expenses}
        </div>

        <div className="p-4 bg-blue-100 rounded-xl">
          Balance: KES {balance}
        </div>
      </div>

      <h2 className="mt-6 font-bold">Transactions</h2>

      <div className="mt-3 space-y-2">
        {transactions.map((t, i) => (
          <div key={i} className="p-2 border rounded">
            {t.date} | {t.description} | {t.amount}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;