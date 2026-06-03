import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-green-600">
          PesaInsight
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Sign in to your account
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">

          <input type="email" placeholder="Email Address"
            className="w-full border p-3 rounded-xl" />

          <input type="password" placeholder="Password"
            className="w-full border p-3 rounded-xl" />

          <button className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;