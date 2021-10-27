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
  border-radius: 1.5em;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(235, 46%, 20%);
  width: 13.9em;
  border-radius: 1em;
  padding: 0.6em 0.5em;
  margin-top: -2em;
  cursor: pointer;
  &:hover {
    background-color: hsl(236, 40%, 35%);
  }
  div {
    margin: 0 0.3em;
    padding: 0 0.2em;
  }
`;
const CardBodyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 15px;
    font-weight: 500;
  }
`;

const IconEllipsis = styled.img`
  width: 1.6em;
  height: 0.4em;
  fill: red;
  color: green;
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
    font-size: 12px;
    font-weight: 400;
    margin: 0.5em 0;
    color: hsl(236, 100%, 87%);
  }
`;

const Card = ({ title, current, previous, text }: CardDetails) => {
  return (
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
            <IconEllipsis alt="Icon ellipsis" src={iconEllipsis} />
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
};

export default Card;
