import React from "react";
// import { Link, navigate } from "gatsby";
import { Link } from "gatsby";
import cslogo from "../img/cslogo.svg";
import logo from "../img/logo.svg";
// import logo from "../img/logo-white.svg";
// import { isLoggedIn, logout } from "../services/auth";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {/* <img src={logo} alt="CS-Edit" style={{ width: '88px' }} /> */}
              <img src={logo} alt="CS-Edit" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <button
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              // role="button"
              aria-label="menu"
              aria-expanded="false"
              onClick={() => this.toggleHamburger()}
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md#how-do-i-resolve-this-error
              tabIndex={0}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/xplore/">
                Migration of EB and ComEX to IEEE Xplore
              </Link>
              <Link className="navbar-item" to="/awards/">
                Awards
              </Link>
              <Link className="navbar-item" to="/recommendations/">
                Recommendations
              </Link>
              <Link className="navbar-item" to="/news/">
                News and Updates
              </Link>
              <Link className="navbar-item" to="/contact/">
                Contact
              </Link>
              {/* <Link className="navbar-item" to="/xplore/">
                Xplore
              </Link> */}
              {/* <div className="navbar-item">
                {isLoggedIn() ? (
                  <a
                    href="/"
                    onClick={(event) => {
                      event.preventDefault();
                      logout(() => navigate(`/xplore/login`));
                    }}
                  >
                    Logout
                  </a>
                ) : (
                  <Link className="navbar-item" to="/xplore/login">
                    Login
                  </Link>
                )}
              </div> */}
            </div>

            <div className="navbar-end has-text-centered">
              <a className="navbar-item" title="IEICE Communication Society" href="https://www.ieice.org/cs_r/eng/index.html" target="_blank" rel="noopener noreferrer">
                <span className="icon">
                  <img src={cslogo} alt="IEICE Communication Society logo" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
