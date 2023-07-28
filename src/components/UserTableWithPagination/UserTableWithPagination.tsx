import useSWR from "swr";
import { UsersTable } from "../UsersTable/UsersTable";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface UserTableWithPaginationProps {
  searchValue: string;
}

export const UserTableWithPagination: React.FC<
  UserTableWithPaginationProps
> = ({ searchValue }) => {
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/search/users?q=${searchValue} in:login`,
    fetcher
  );

  if (isLoading) {
    return <>loading data...</>;
  }

  if (error) {
    return <>...error occured while fetching users....</>;
  }
  console.log("data = ", data);

  return (
    <>
      <UsersTable users={data?.items} />
    </>
  );
};
