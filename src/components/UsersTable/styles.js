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

export const linkStyle = {
  color: "deepskyblue",
  "text-decoration": "none",
};