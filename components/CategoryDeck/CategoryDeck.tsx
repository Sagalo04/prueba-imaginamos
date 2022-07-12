import React from "react";
import styled from "styled-components";
import CategoryButton from "../CategoryButton/CategoryButton";

const CategoryDeckStyled = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
`;

interface Props {
    Categories: any;
    categoryHandler: any;
    categoria: any;
  }

function CategoryDeck(props: Props) {
  return (
    <CategoryDeckStyled>
      {props.Categories?.map((category: any) => {
        return (
          <CategoryButton
            id={category.id}
            handler={props.categoryHandler}
            key={category.id}
            name={category.name}
            icon={category.icon}
            categoria={props.categoria}
          />
        );
      })}
    </CategoryDeckStyled>
  );
}

export default CategoryDeck;
