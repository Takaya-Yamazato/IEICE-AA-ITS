import React from "react";
import { Link } from "gatsby";

import logo from "../../static/img/logo.svg";
import facebook from "../../static/img/social/facebook.svg";
// import instagram from '../../static/img/social/instagram.svg'
import twitter from "../../static/img/social/twitter.svg";
// import vimeo from '../../static/img/social/vimeo.svg'
import youtube from "../../static/img/social/youtube.svg";
import github from "../../static/img/social/github-icon.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
        <Link to="/">
          <img src={logo} alt="IEICE AA-ITS" style={{ height: "3em" }} />
          </Link>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        ホーム
                      </Link>
                    </li>
                    <Link className="navbar-item" to="/about/">
                        AA-ITS研とは
                      </Link>
                    <li>
                      <Link className="navbar-item" to="/news/">
                        お知らせ（イベント情報）
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contribution/">
                        研究会に参加するには
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/committee/">
                        専門委員会
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/">
                        コンタクト
                      </Link>
                    </li>
                    <li>
                    </li>
                    {/* <li>
                      <a className="navbar-item" href="https://ieice-cs-edit.netlify.app/admin/" target="_blank" rel="noopener noreferrer">
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <a className="navbar-item" href="https://www.ieice.org/cs/jpn/EB/index.html">
                        IEICE Transaction on Communications (EB)
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.ieice.org/publications/comex/">
                        IEICE Communications Express (ComEX)
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.ieice.org/cs/jpn/JB/index-new.html">
                        IEICE Transactions on Communications (Japanese Edition, JB)
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.ieice.org/~cs-edit/magazine/">
                        IEICE Bplus (Communication Society Magazine)
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.ieice.org/cs_r/eng/index.html">
                        IEICE Communication Society
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/IEICE.org">
                  <img src={facebook} alt="Facebook" style={{ width: "1em", height: "1em" }} />
                </a>
                <a title="twitter" href="https://twitter.com/ieice_EIC">
                  <img className="fas fa-lg" src={twitter} alt="Twitter" style={{ width: "1em", height: "1em" }} />
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UCDMkjDeK_8WafkMvIfbtTKQ">
                  <img src={youtube} alt="youtube" style={{ width: "1em", height: "1em" }} />
                </a>
                <a title="github" href="https://github.com/Takaya-Yamazato/IEICE-CS-edit" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="github" style={{ width: "1em", height: "1em" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
