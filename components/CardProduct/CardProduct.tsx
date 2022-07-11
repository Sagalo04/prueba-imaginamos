import Image from "next/image";
import React from "react";
import styled from "styled-components";
import starIcon from "../../assets/icons/149220.svg";

const CardCointaner = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid lightgray;
  border-radius: 22px;
  overflow: hidden;
  cursor: pointer;
  h1 {
    margin-top: 1.5rem;
    margin-bottom: 0.2rem;
    font-size: 1.6rem;
  }
  h3 {
    color: gray;
  }
  transition: all 0.15s ease;

  :hover {
    transform: scale(1.05);
    box-shadow: 2px 2px 10px rgba(0,0,0,.2)
  }
`;

const TopCardContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 200px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 22px;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 22px;
  }
`;

const InfoCardContainer = styled.div`
  padding-left: 1rem;
  padding-bottom: 1.5rem;
`;

const TimeStyled = styled.div`
  background-color: #f7f7f7;
  width: 110px;
  padding: 1rem 1rem;
  z-index: 99;
  align-self: flex-end;
  border-radius: 0 1rem 0 0;
`;

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

interface Props {
  id: string;
  image: string;
  time: string;
  name: string;
  qualification: string;
  price: string;
  handler: any;
}

function CardProduct(props: Props) {
  const clickHandler = () => {
    const { id, name, price, image } = props;
    const nom = name
    props.handler({ id, nom, price, image });
  };
  return (
    <CardCointaner onClick={clickHandler}>
      <TopCardContainer>
        <img src={props.image} alt="" />
        <TimeStyled>
          <p>{props.time}</p>
        </TimeStyled>
      </TopCardContainer>
      <InfoCardContainer>
        <h1>{props.name}</h1>
        <StyledInfo>
          <StyledInfo>
            <Image src={starIcon} width={15} height={15} alt="star-icon" />
            <h2>{props.qualification}</h2>
          </StyledInfo>
          <h3>Price: {props.price} $</h3>
        </StyledInfo>
      </InfoCardContainer>
    </CardCointaner>
  );
}

export default CardProduct;
