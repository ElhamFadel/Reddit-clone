import React, { useState } from "react";
import { reddit, redditWorld } from "../../assets";
import { InputSearch } from "../../ui";
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
    </S.Header>
  );
}

export default Header;
