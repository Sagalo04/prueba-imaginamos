import React from "react";
import styled from "styled-components";
import CardProduct from "../CardProduct/CardProduct";

const ProductsDeckStyled = styled.div`
  display: flex;
  gap: 2rem 3rem;
  flex-wrap: wrap;
  width: 1200px;
`;

interface Props {
  productos: any;
  cardHandler: any;
}

function ProductsDeck(props: Props) {
  return (
    <ProductsDeckStyled>
      {props.productos?.length
        ? props.productos.map((prod: any) => {
            return (
              <CardProduct
                id={prod.id}
                key={prod.id}
                name={prod.name}
                time={prod.time}
                image={prod.image}
                qualification={prod.qualification}
                price={prod.price}
                handler={props.cardHandler}
              />
            );
          })
        : null}
    </ProductsDeckStyled>
  );
}

export default ProductsDeck;
