import "./TopBar.css";

const TopBar = () => (
  <div className="topbar-bar d-flex justify-content-between align-items-center bg-">
    {/* parte sx */}
    <div className="d-flex align-items-center">
      <h2 className="mb-0 topbar-title">TV Shows</h2>
      <div className="dropdown ms-4">
        <button className="btn btn-secondary btn-sm dropdown-toggle rounded-0 genre-btn" data-bs-toggle="dropdown">
          Genres
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Comedy
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Drama
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Thriller
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* parte dx */}
    <div className="view-icons">
      <i className="bi bi-grid"></i>
      <i className="bi bi-grid-3x3"></i>
    </div>
  </div>
);

export default TopBar;
