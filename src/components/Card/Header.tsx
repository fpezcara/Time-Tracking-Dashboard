import React from "react";
import styled from "styled-components";

import { CardHeaderStyle } from "./types";

const Container = styled.div<{ bgColor: CardHeaderStyle["bgColor"] }>`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  overflow: hidden;
  height: 4em;
  width: 13em;
  padding: 0 0.9em 0.6em 0.9em;
  border-radius: 0.8em;
  img {
    width: 4em;
    height: 100%;
  }
`;

const Header = ({ title, bgColor, img }: CardHeaderStyle) => {
  return (
    <Container bgColor={bgColor}>
      <img alt={title} src={img} />
    </Container>
  );
};

export default Header;
