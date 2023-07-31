import styled from "styled-components";

export const CardTitle = styled.h3`
  padding: 20px 0;
`

export const CardLinkStyle = styled.a `
  color: deepskyblue;
  text-decoration: "none";
`;

export const CardWrapper = styled.div`
  width: 70%;
  min-height: 70%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 4px 4px 6px 1px rgba(77,77,77,0.78);
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: lightgray solid 1px;
`;

export const GridWrapper = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 30px;
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px lightgrey solid;
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