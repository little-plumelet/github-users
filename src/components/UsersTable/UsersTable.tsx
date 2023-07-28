import { IUser } from "@/interfaces/IUser";
import styled from "styled-components";

const StyledTh = styled.th`
  flex: 1;
  padding: 20px 10px 20px;
  text-align: left;
`;
const StyledHiddenTh = styled.th`
  display: none
`;

const StyledTd = styled.td`
  flex: 1;
  padding-left: 10px;
`;

const StyledHiddenTd = styled.td`
  display: none;
`;

const StyledTr = styled.tr`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
`;

const tdStyle = {
  flex: 1
}

const thStyle = {
  flex: 1,
  padding: '20px 10px 20px',
  'text-align': 'left'
}

interface IUserTableProps {
  users: Array<Omit<IUser, 'avatar_url'>>
}

export const UsersTable: React.FC<IUserTableProps> = ({ users }) => {
  return (
    <table style={{width: "100%"}}>
      <thead>
        <StyledTr>
          <StyledHiddenTh>id</StyledHiddenTh>
          <StyledTh >Login</StyledTh>
          <StyledTh>Repositories</StyledTh>
        </StyledTr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <StyledTr key={user?.id}>
            <StyledHiddenTd>{user?.id}</StyledHiddenTd>
            <StyledTd>{user?.login}</StyledTd>
            <StyledTd>{user?.repos_url}</StyledTd>
          </StyledTr>
        ))}
      </tbody>
    </table>
  )
}