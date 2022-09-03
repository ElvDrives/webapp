import nav from "../stub/nav.js";
const Navbar = () => {
  console.log(nav, "navbar");
  return (
    <nav
      className="navbar custom_nav navbar-expand-lg navbar-light shadow-xl"
      // style={{ width: "100vw" }}
    >
      <a className="navbar-brand" href="#">
        <img src="./images/logo.svg" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          {nav &&
            nav.map((item, index) => (
              <li key={index} className="nav-item pl-5">
                <a className="nav-link" href="#">
                  {item}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
