import React from "react";
import styled from "styled-components";

import iconEllipsis from "../../assets/images/icon-ellipsis.svg";
import { styles } from "../../assets/data/styles";

import Header from "./Header";
import { CardDetails } from "./types";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(235, 46%, 20%);
  width: 13.5em;
  min-height: 10em;
  border-radius: 1em;
  padding: 0.4em 0.6em;
  margin-top: -2em;
  cursor: pointer;
  &:hover {
    background-color: hsl(236, 40%, 35%);
  }
  div {
    margin: 0 0.2em;
    padding: 0 0.3em;
  }
  @media (max-width: 769px) {
    min-width: 23em;
    min-height: auto;
    display: flex;
    padding: 1em 0.5em;
    border-radius: 1em;
    div {
      padding: 0.2em 0.2em;
    }
  }
`;

const CardBodyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 17px;
    font-weight: 500;
  }
  img {
    max-width: 1.6em;
    height: 0.4em;
  }
  @media (max-width: 769px) {
    margin: 0;
    h3 {
      font-size: 18px;
      margin: 0.4em 0;
    }
  }
`;

const CardBodyMain = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 50px;
    font-weight: 300;
    margin: 0em 0 0.1em 0;
  }
  span {
    font-size: 13px;
    font-weight: 400;
    margin: 0.2em 0;
    color: hsl(236, 100%, 87%);
  }
  @media (max-width: 769px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 31px;
      margin: 0;
    }
  }
`;

const Card = ({ title, current, previous, text }: CardDetails) => (
  <CardContainer>
    {styles.map(
      (style, i) =>
        style.title === title && (
          <Header key={i} bgColor={style.bgColor} img={style.img} title={style.title} />
        ),
    )}
    <CardBody>
      <div>
        <CardBodyHeader>
          <h3>{title}</h3>
          <img alt="icon ellipsis" src={iconEllipsis} />
        </CardBodyHeader>
        <CardBodyMain>
          <p>{current}hrs</p>
          <span>
            {text} - {previous} hrs
          </span>
        </CardBodyMain>
      </div>
    </CardBody>
  </CardContainer>
);

export default Card;
