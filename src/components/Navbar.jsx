import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark ">
    <div className="container-fluid">
      {/* Logo */}
      <a className="navbar-brand" href="#">
        <img src="../assets/netflix-logo-png-2562.png" className="nav-logo" alt="logo" />
      </a>

      {/* x mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar  itmes*/}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active fw-bold" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#">
              TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#">
              Recently Added
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#">
              My List
            </a>
          </li>
        </ul>

        {/* Items sulla dx */}
        <div className="d-flex align-items-center navbar-icons">
          <i className="bi bi-search"></i>
          <span className="kids-text">KIDS</span>
          <i className="bi bi-bell"></i>
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
