import React, { Fragment } from "react";
import GlobalStyle from "../theme/globalStyle";
import { Header } from "../components";
function Home() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
}

export default Home;
