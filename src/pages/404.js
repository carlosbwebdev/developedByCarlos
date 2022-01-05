import React from "react";
import Layout from "../components/layout";
import "../css/layout.css";
import { Link } from "gatsby";

const ErrorPage = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>Stooooop!</h1>
          <h6>Error 404! This page doesn't exist!</h6>
          <Link className="btn" to="/">
            Get Back Home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default ErrorPage;
