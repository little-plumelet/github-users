import styled from "styled-components";

export const StyledLoader = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledErrorText = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: darkred;
`;

export const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  min-width: 120px;
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

  &:hover {
    cursor: pointer;
    color: deepskyblue;
  }
`;

export const StyledSelect = styled.select`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;

export const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;