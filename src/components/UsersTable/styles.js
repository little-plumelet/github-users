import styled from "styled-components";

export const StyledEmptyContainer = styled.div`
  text-align: center;
  line-height: 550%;
`;

export const StyledTh = styled.th`
  flex: 1;
  padding: 20px 10px 20px;
  text-align: left;
`;

export const StyledTd = styled.td`
  flex: 1;
  padding-left: 10px;
`;

export const StyledTr = styled.tr`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
`;

export const StyledLink = styled.div`
  color: deepskyblue;
  text-decoration: none;
  &: hover {
    cursor: ponter;
  }
`;

export const StyledCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledPortal = styled.div`
  background-color: rgba(77,77,77,0.78);
  position: absolute;
  z-index: 100;
  top: 0;
  width: 100vw;
  height: 100vh;
`;
