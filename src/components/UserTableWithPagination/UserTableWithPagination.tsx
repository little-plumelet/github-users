"use client";

import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { UsersTable } from "../UsersTable/UsersTable";

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Select = styled.select`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

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
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState<OrderType>("");
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/search/users?q=${searchValue}+in:login&page=${pageIndex}&per_page=${pageSize}&${
      sortOrder ? "sort=repositories&order=" + sortOrder : null
    }`,
    fetcher
  );
  const totalPages = Math.ceil(data?.total_count / pageSize);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        loading data...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          color: "darkred",
        }}
      >
        <div>Error occured</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  const handlePreviousPage = () => {
    setPageIndex((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPageIndex((prevPage) => prevPage + 1);
  };

  const handleSortByRepositories = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <>
      <Button onClick={handleSortByRepositories}>
        Sort users by number of reppositories{" "}
        {sortOrder === "asc" ? (
          <span>&#x25B2;</span>
        ) : sortOrder === "desc" ? (
          <span>&#x25BC;</span>
        ) : null}
      </Button>
      <br />
      <UsersTable users={data?.items} />
      <br />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button onClick={() => setPageIndex(1)}>First</Button>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button onClick={handlePreviousPage} disabled={pageIndex === 1}>
            Previous
          </Button>
          <Span>{pageIndex}</Span>
          <Button onClick={handleNextPage} disabled={pageIndex === totalPages}>
            Next
          </Button>
        </div>
        <Select
          onChange={(event) => setPageSize(parseInt(event?.target?.value))}
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
        </Select>
      </div>
    </>
  );
};
