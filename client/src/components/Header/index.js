import React, { useState } from "react";
import { reddit, redditWorld } from "../../assets";
import { InputSearch, Button } from "../../ui";
import * as S from "./style";
function Header() {
  const [search, setSearch] = useState("");
  return (
    <S.Header className="header-wrapper">
      <InputSearch
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
