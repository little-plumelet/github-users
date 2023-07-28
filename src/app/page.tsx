"use client";

import { useState } from "react";
import { SearchUserBar } from "@/components/Search/SearchUserBar";
import { UserTableWithPagination } from "@/components/UserTableWithPagination/UserTableWithPagination";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 90%;
  margin: 0 auto;
  padding: 20px 50px;
`;

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <StyledMain>
      <SearchUserBar
        value={inputValue}
        setValue={setInputValue}
        setSearchValue={setSearchValue}
      />
      {!!searchValue &&<UserTableWithPagination searchValue={searchValue} />}
    </StyledMain>
  );
}
