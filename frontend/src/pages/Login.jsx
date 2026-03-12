import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/home");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-4 mx-auto">
        <h3>Login</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100">Login</button>
        </form>

        <p className="mt-3">
          Don't have account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
