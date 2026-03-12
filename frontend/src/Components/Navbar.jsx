// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <nav className="navbar navbar-dark bg-dark px-4">
//       <Link className="navbar-brand" to="/home">
//         MyShop
//       </Link>

//       <Link className="navbar-brand" to="/home">
//         Products
//       </Link>

//       <Link className="btn btn-light" to="/cart">
//         Cart
//       </Link>

//       <button className="btn btn-outline-light" onClick={handleLogout}>
//         Logout
//       </button>
//     </nav>
//   );
// }

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      {/* Logo */}
      <Link className="navbar-brand fw-bold text-warning" to="/home">
        🛒 MyShop
      </Link>

      {/* Mobile Toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        {/* Center Menu */}
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-3">
            <Link className="nav-link fs-5 text-light" to="/home">
              Products
            </Link>
          </li>

          <li className="nav-item mx-3">
            <Link className="nav-link fs-5 text-light" to="/cart">
              Cart 🛍️
            </Link>
          </li>
        </ul>

        {/* Logout Right */}
        <button className="btn btn-outline-warning" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
