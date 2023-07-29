import { IUser } from "@/interfaces/IUser";
import Link from "next/link";
import styled from "styled-components";

const StyledTh = styled.th`
  flex: 1;
  padding: 20px 10px 20px;
  text-align: left;
`;

const StyledTd = styled.td`
  flex: 1;
  padding-left: 10px;
`;

const StyledTr = styled.tr`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
`;

const linkStyle = {
  color: "deepskyblue",
  "text-decoration": "none",
};

interface IUserTableProps {
  users: Array<Pick<IUser, "login" | "id" | "html_url">>;
}

export const UsersTable: React.FC<IUserTableProps> = ({ users }) => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <StyledTr>
          <StyledTh>Login</StyledTh>
          <StyledTh>Repositories</StyledTh>
        </StyledTr>
      </thead>
      <tbody>
        {!users.length && (
          <div style={{ textAlign: "center", lineHeight: "550%" }}>
            NO data avaliable
          </div>
        )}
        {users?.map((user) => (
          <StyledTr key={user?.id}>
            <StyledTd>
              <Link style={linkStyle} href={`/user/${user?.id}`}>{user?.login}</Link>
            </StyledTd>
            <StyledTd>{user?.html_url}</StyledTd>
          </StyledTr>
        ))}
      </tbody>
    </table>
  );
};
