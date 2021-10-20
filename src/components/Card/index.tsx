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
  font-family: "Rubik";
  color: white;
  border-radius: 1.5em;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(235, 46%, 20%);
  width: 13em;
  border-radius: 0.8em;
  padding: 0.6em 0.5em;
  margin-top: -0.8em;
  div {
    margin: 0 0.3em;
    padding: 0 0.2em;
  }
`;
const CardBodyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  img {
    width: 1.2em;
    height: 0.3em;
  }
  h3 {
    font-size: 18px;
    font-weight: 400;
  }
`;

const CardBodyMain = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 3em;
    font-weight: 300;
    margin: 0.1em 0 0.1em 0;
  }
  span {
    font-weight: 400;
    margin: 0.5em 0;
    color: hsl(236, 100%, 87%);
  }
`;

const Card = ({ title, current, previous }: CardDetails) => {
  return (
    <CardContainer>
      {styles.map(
        (style) =>
          style.title === title && (
            <Header bgColor={style.bgColor} img={style.img} title={style.title} />
          ),
      )}
      <CardBody>
        <div>
          <CardBodyHeader>
            <h3>{title}</h3>
            <img src={iconEllipsis} />
          </CardBodyHeader>
          <CardBodyMain>
            <p>{current}hrs</p>
            <span>Yesterday - {previous} hrs</span>
          </CardBodyMain>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
