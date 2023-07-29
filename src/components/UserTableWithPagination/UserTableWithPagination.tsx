"use client";

import { useState } from "react";
import useSWR from "swr";
import { UsersTable } from "../UsersTable/UsersTable";
import {
  StyledButton,
  StyledButtonContainer,
  StyledErrorText,
  StyledLoader,
  StyledPagination,
  StyledSelect,
  StyledSpan,
} from "./styles";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error();
    await res.json().then((data) => (error.message = data.message));
    throw error;
  }

  return res.json();
};

interface UserTableWithPaginationProps {
  searchValue: string;
}

type OrderType = "asc" | "desc" | "";

export const UserTableWithPagination: React.FC<
  UserTableWithPaginationProps
> = ({ searchValue }) => {
  const searchUserpageIndex = localStorage.getItem('searchUserpageIndex');
  const pageSizeStorage = localStorage.getItem('pageSizeStorage');
  const [pageIndex, setPageIndex] = useState<number>(searchUserpageIndex ?  parseInt(searchUserpageIndex) : 1);
  const [pageSize, setPageSize] = useState(pageSizeStorage ? parseInt(pageSizeStorage) : 10);
  const [sortOrder, setSortOrder] = useState<OrderType>("");
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/search/users?q=${searchValue}+in:login&page=${pageIndex}&per_page=${pageSize}&${
      sortOrder ? "sort=repositories&order=" + sortOrder : null
    }`,
    fetcher
  );
  const totalPages = Math.ceil(data?.total_count / pageSize);

  if (isLoading) {
    return <StyledLoader>loading data...</StyledLoader>;
  }

  if (error) {
    return (
      <StyledErrorText>
        <div>Error occured</div>
        <div>{error?.message}</div>
      </StyledErrorText>
    );
  }

  const handlePreviousPage = () => {
    setPageIndex((prevPage) => {
      const res = prevPage - 1;
      localStorage.setItem('searchUserpageIndex', String(res));
      return res;
    });
    
  };

  const handleNextPage = () => {
    setPageIndex((prevPage) => {
      const res = prevPage + 1;
      localStorage.setItem('searchUserpageIndex', String(res));
      return res;
    });
  };

  const handleSortByRepositories = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <>
      <StyledButton onClick={handleSortByRepositories}>
        Sort users by number of reppositories{" "}
        {sortOrder === "asc" ? (
          <span>&#x25B2;</span>
        ) : sortOrder === "desc" ? (
          <span>&#x25BC;</span>
        ) : null}
      </StyledButton>
      <br />
      <UsersTable users={data?.items} />
      <br />
      <StyledPagination>
        <StyledButton onClick={() => setPageIndex(1)}>First</StyledButton>
        <StyledButtonContainer>
          <StyledButton onClick={handlePreviousPage} disabled={pageIndex === 1}>
            Previous
          </StyledButton>
          <StyledSpan>{pageIndex}</StyledSpan>
          <StyledButton
            onClick={handleNextPage}
            disabled={pageIndex === totalPages || !data?.items?.length}
          >
            Next
          </StyledButton>
        </StyledButtonContainer>
        <StyledSelect
          onChange={(event) => {
            localStorage.setItem('pageSizeStorage', event?.target?.value);
            setPageSize(parseInt(event?.target?.value));
          }}
        >
          <option selected={pageSize === 10 ? true : false} value="10">
            10 / page
          </option>
          <option selected={pageSize === 20 ? true : false} value="20">
            20 / page
          </option>
          <option selected={pageSize === 30 ? true : false} value="30">
            30 / page
          </option>
        </StyledSelect>
      </StyledPagination>
    </>
  );
};
