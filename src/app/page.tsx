"use client";

import { useState } from "react";
import { SearchUserBar } from "@/components/Search/SearchUserBar";
import { UserTableWithPagination } from "@/components/UserTableWithPagination/UserTableWithPagination";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <main>
      <SearchUserBar
        value={inputValue}
        setValue={setInputValue}
        setSearchValue={setSearchValue}
      />
      <UserTableWithPagination searchValue={searchValue} />
    </main>
  );
}
