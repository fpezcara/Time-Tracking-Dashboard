import React from "react";
import styled from "styled-components";

import { CardHeaderStyle } from "./types";

const Container = styled.div<{ bgColor: CardHeaderStyle["bgColor"] }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  overflow: hidden;
  height: 2em;
  width: 12em;
  padding: 0.6em 0.9em;
  border-radius: 0.5em;
  margin-bottom: 0em;
  img {
    width: 3.5em;
    height: 4em;
  }
`;

const Header = ({ title, bgColor, img }: CardHeaderStyle) => {
  return (
    <>
      <Container bgColor={bgColor}>
        <img alt={title} src={img} />
      </Container>
    </>
  );
};

export default Header;
