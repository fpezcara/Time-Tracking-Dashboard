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
  width: 12.7em;
  padding: 0 1.1em 0.6em 0.9em;
  border-radius: 0.8em;
  img {
    width: 4em;
    height: 100%;
  }
  @media (max-width: 769px) {
    min-width: 22em;
    min-height: auto;
    border-radius: 1em;
    padding: 0 1.1em 0.6em 0.9em;
  }
`;

const Header = ({ title, bgColor, img }: CardHeaderStyle) => (
  <Container bgColor={bgColor}>
    <img alt={title} src={img} />
  </Container>
);

export default Header;
