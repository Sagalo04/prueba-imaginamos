import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ProductStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  img {
    border-radius: 15px;
  }
  .name {
    line-height: 18px;
    width: 110px;
  }
  h2 {
    font-weight: 500;
  }
  h3{
    color: gray;
  }
`;

interface Props {
  image: string;
  price: string;
  name: string;
}

function ProductCart(props: Props) {
  return (
    <ProductStyled>
      <Image src={props.image} alt="" width={70} height={50} />
      <h2>1 x </h2>
      <h2 className="name">{props.name}</h2>
      <h3>${props.price}</h3>
    </ProductStyled>
  );
}

export default ProductCart;
