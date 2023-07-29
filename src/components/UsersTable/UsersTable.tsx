import { IUser } from "@/interfaces/IUser";
import Link from "next/link";
import { linkStyle, StyledEmptyContainer, StyledTd, StyledTh, StyledTr } from './styles';


interface IUserTableProps {
  users: Array<Pick<IUser, "login" | "id" >>;
}

export const UsersTable: React.FC<IUserTableProps> = ({ users }) => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <StyledTr>
          <StyledTh>Login</StyledTh>
        </StyledTr>
      </thead>
      <tbody>
        {!users.length && (
          <StyledEmptyContainer>
            NO data avaliable
          </StyledEmptyContainer>
        )}
        {users?.map((user) => (
          <StyledTr key={user?.id}>
            <StyledTd>
              <Link style={linkStyle} href={`/user/${user?.id}`}>{user?.login}</Link>
            </StyledTd>
          </StyledTr>
        ))}
      </tbody>
    </table>
  );
};
