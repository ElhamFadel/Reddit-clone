import React, { Fragment } from "react";
import GlobalStyle from "../theme/globalStyle";
import { Header } from "../components";
import { BrowserRouter as Router } from "react-router-dom";
function Home() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Header />
      </Router>
    </Fragment>
  );
}

export default Home;
