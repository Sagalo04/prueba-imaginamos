import Image from "next/image";
import React from "react";
import styled from "styled-components";
import userImg from "../../assets/icons/747376.svg";
import timeImg from "../../assets/icons/149316.svg";
import ProductCart from "../ProductCart/ProductCart";

const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  background-color: #fdfdfb;
  box-shadow: 1px 2px 2px;
  padding: 0 2.5rem;
  height: 100vh;
  z-index: 999;
  position: fixed;
  align-self: flex-start;
  right: 0;
`;

const ContainerUser = styled.div`
  display: flex;
  gap: 2rem;
  align-self: flex-end;
`;

const ProductCount = styled.div`
  background-color: #ffd644;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
`;

const StyledDirection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5539a3;
  gap: 1.2rem;
  padding: 2rem;
  border-radius: 20px;
  color: white;
  .link {
    color: #ffd644;
  }
`;

const OrderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  h1 {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

const TotalStyled = styled.div`
  display: flex;
  flex-direction: column;
  .text1{
    font-size: 1.5rem;
    align-self: flex-end;
  }
  .text2{
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

const FlexStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TimeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #66489c;
  width: 3rem;
  height: 3rem;
  border-radius: 10px;
`;

interface Props {
  cart: Array<any>;
}

function Sidebar(props: Props) {
  return (
    <SidebarStyled>
      <ContainerUser>
        <Image src={userImg} alt="" width={25} height={25} />
        <ProductCount>3</ProductCount>
      </ContainerUser>
      <OrderStyled>
        <h1>
          My 😎 <br /> Order
        </h1>
        <StyledDirection>
          <FlexStyled>
            <p>625 St Mark Ave</p>
            <p className="link">Edit</p>
          </FlexStyled>
          <FlexStyled>
            <TimeStyled>
              <Image src={timeImg} alt="" width={25} height={25} />
            </TimeStyled>
            <p>35 min</p>
            <p className="link">Choose time</p>
          </FlexStyled>
        </StyledDirection>
        {props.cart?.length
          ? props.cart?.map((prod: any, index: number) => {
              return (
                <ProductCart
                  image={prod.image}
                  name={prod.name}
                  price={prod.price}
                  key={index}
                />
              );
            })
          : null}
      </OrderStyled>
      <TotalStyled>
        <FlexStyled>
        <p className="text1">Total</p>
        <p className="text2">$25.97</p>
        </FlexStyled>
        <hr />
        </TotalStyled>
    </SidebarStyled>
  );
}

export default Sidebar;
