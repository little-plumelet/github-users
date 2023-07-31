"use client";

import { IUser } from "@/interfaces/IUser";
import { useState } from "react";
import { createPortal } from "react-dom";
import { UserCard } from "../UserCard/UserCard";
import { StyledCardWrapper, StyledEmptyContainer, StyledLink, StyledPortal, StyledTd, StyledTh, StyledTr } from './styles';


interface IUserTableProps {
  users: Array<Pick<IUser, "login" | "id" >>;
}

export const UsersTable: React.FC<IUserTableProps> = ({ users }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ selectedId, setSelectedId ] = useState<null | string>(null);
  
  const handleSelect = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event?.currentTarget?.id);
    event.stopPropagation();
    setSelectedId(event?.currentTarget?.id ?? null);
    setIsOpen(true);

  }
  return (
    <>
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
            
              <StyledLink id={String(user?.id)} onClick={handleSelect}>{user?.login}</StyledLink>
            </StyledTd>
          </StyledTr>
        ))}
      </tbody>
    </table>
    {isOpen && selectedId && createPortal(
      <StyledPortal>
        <StyledCardWrapper>
          <UserCard id={+selectedId} onClose={() => setIsOpen(false)} />
        </StyledCardWrapper>
      </StyledPortal>,
    document.body
  )}
  </>
  );
};
