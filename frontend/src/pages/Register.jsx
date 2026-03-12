import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("User Registered Successfully");

      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-4 mx-auto">
        <h3>Register</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

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

          <button className="btn btn-success w-100">Register</button>
        </form>

        <p className="mt-3">
          Already have account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
