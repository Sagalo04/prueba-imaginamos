import React from "react";
import styled, { css } from "styled-components";

interface styledProps {
  category: any;
}

const CardCointaner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.1);
  justify-content: center;
  border-radius: 5rem;
  width: 100px;
  height: 200px;
  margin-top: 3rem;
  cursor: pointer;
  justify-content: space-around;
  padding-bottom: 2rem;
  transition: all 0.15s ease;
  ${(p: styledProps) =>
    p.category &&
    css`
      background: #ffd543;
    `}
  :hover {
    transform: scale(1.05);
  }
`;

const StyledImage = styled.img`
  width: 60%;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 80px;
  height: 80px;
  border-radius: 5rem;
  border: solid 2px lightgray;
  ${(p: styledProps) =>
    p.category &&
    css`
      border: none;
    `}
`;

interface Props {
  name: string;
  icon: string;
  id: number;
  handler: any;
  categoria: any;
}

function CategoryButton(props: Props) {
  const clickHandler = () => {
    props.handler(props.id);
  };
  return (
    <CardCointaner
      category={props.categoria === props.id ? true : false}
      onClick={clickHandler}
    >
      <ImageContainer category={props.categoria === props.id ? true : false}>
        <StyledImage src={props.icon} alt="" />
      </ImageContainer>
      <p>{props.name}</p>
    </CardCointaner>
  );
}

export default CategoryButton;
