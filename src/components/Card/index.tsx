import React from "react";
import styled from "styled-components";

import iconEllipsis from "../../assets/images/icon-ellipsis.svg";
import { styles } from "../../assets/data/styles";

import Header from "./Header";
import { CardDetails } from "./types";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* align-items: center; */
  font-family: "Rubik";
  background-color: hsl(235, 46%, 20%);
  color: white;
  border-radius: 0.8em;
`;

const CardBody = styled.div`
  width: 14em;
  display: flex;
  flex-direction: column;
  border-radius: 0.8em;
  padding: 1em;
  /* background-color: hsl(235, 46%, 20%); */
`;
const CardBodyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  img {
    width: 2em;
    height: 0.5em;
  }
  h3 {
    font-size: 18px;
  }
`;

const CardBodyMain = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
`;

const Card = ({ title, current, previous }: CardDetails) => {
  console.log(title);

  return (
    <CardContainer>
      {styles.map(
        (style) =>
          style.title === title && (
            <Header bgColor={style.bgColor} img={style.img} title={style.title} />
          ),
      )}
      <CardBody>
        <CardBodyHeader>
          <h3>{title}</h3>
          <img src={iconEllipsis} />
        </CardBodyHeader>
        <CardBodyMain>
          <p>{current} hrs</p>
          <span>Yesterday - {previous} hrs</span>
        </CardBodyMain>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
