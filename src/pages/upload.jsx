import Papa from "papaparse";
import { useNavigate } from "react-router-dom";
import { useTransactions } from "../context/TransactionContext";

function Upload() {
  const navigate = useNavigate();
  const { setTransactions } = useTransactions();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        console.log(results.data);

        setTransactions(results.data);
        navigate("/dashboard");
      },
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Upload Statement (CSV)</h1>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mt-4"
      />
    </div>
  );
}

export default Upload;