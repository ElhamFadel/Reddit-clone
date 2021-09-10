import React from "react";
import { reddit, redditWorld } from "../../assets";
import { InputSearch, Button } from "../../ui";
import { useStore } from "../../center-data/context";
import * as S from "./style";
function Header() {
  const [{ search }, dipatch] = useStore();
  return (
    <S.Header className="header-wrapper">
      {console.log(search)}
      <InputSearch
        value={search}
        onChange={(e) => dipatch({ type: "SEARCH", payload: e.target.value })}
        placeholder="Search ... "
        type="text"
        name="search"
      />
      <Button className="btn btn-primary" to="/signup" primary>
        Sign Up
      </Button>
      <Button className="btn btn-second" to="login">
        Login
      </Button>
    </S.Header>
  );
}

export default Header;
