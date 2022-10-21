import styled from "styled-components";

export const TopoPag = styled.header`
  background-color: DarkSlateBlue;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 0px;
  height: 900px;
  width: 100%;
  color: white;
  border: solid black 1px;
`;

export const MeioPag = styled.nav`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 150px;
  grid-template-rows: 50px;
  row-gap: 10px;
  column-gap: 10px;
  margin: 20px;
  background-color: navy;
  color: white;
  border: solid black 2px;
`;
export const GeralPag = styled.main`
  min-height: 80%;
  display: flex;
  text-align: center;
  gap: 2px;
  background-color: mediumblue;
`;
export const BoxPaginaPrincipal = styled.nav`
  text-align: center;
  justify-content: center;
  flex-direction: column;
  width: 190px;
  gap: 2px;
  border: ridge 10px orange;
`;
