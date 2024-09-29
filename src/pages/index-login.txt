import React from "react";
import { Link, navigate } from "gatsby";
import { getUser, isLoggedIn, logout } from "../services/auth";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your <Link to="/xplore/profile">profile</Link>
            <br />
            Here is the link <Link to="xplore/ComEX-Information-for-Authors">ComEX</Link>
          </>
        ) : (
          <>
            You should <Link to="/xplore/login">log in</Link> to see restricted content
          </>
        )}
      </p>
      <hr></hr>
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
      ) : null}
    </Layout>
  );
}
