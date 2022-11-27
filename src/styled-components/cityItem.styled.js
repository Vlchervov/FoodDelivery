import styled from "styled-components";

export const ListItem = styled.ul`
  font-family: "Gilroy";
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: #000000;
  list-style: none;
`;

export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  div {
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    height: 300px;
    width: 400px;
  }
`;
