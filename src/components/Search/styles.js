import styled from "styled-components";

export const StyledSearchForm = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  font-size: 1.5rem;
`;

export const StyledSearchInput = styled.input`
  flex-grow: 1;
  border: 1px lightgray solid;
  border-right: none;
  border-radius: 8px 0 0 8px;
  padding: 5px 10px;
  outline: none;
  font-size: 1.2rem;
`;

export const StyledSearchButton = styled.button`
  border-radius: 0 8px 8px 0;
  border: 1px lightgray solid;
  outline: none;
  padding: 5px 10px;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    color: deepskyblue;
  }
`;