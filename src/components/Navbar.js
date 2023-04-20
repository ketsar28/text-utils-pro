const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark `}
      style={{ background: props.mode === "light" ? "#087308" : "#bb1919" }}
    >
      <div className="container">
        <a className="navbar-brand  fw-bold" href="/">
          Text Utils
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`form-check form-switch text-white`}
          onClick={props.click}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className="form-check-label text-white"
            htmlFor="flexSwitchCheckDefault"
          >
            {props.modeName}
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
