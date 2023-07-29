"use client";

import { useState } from "react";
import { SearchUserBar } from "@/components/Search/SearchUserBar";
import { UserTableWithPagination } from "@/components/UserTableWithPagination/UserTableWithPagination";
import { StyledMain } from './styles';

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
      {!!searchValue && <UserTableWithPagination searchValue={searchValue} />}
    </StyledMain>
  );
}
