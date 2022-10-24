import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardWrapper = styled.div`
  height: 240px;
  width: 160px;
  background-color: beige;
  border: #15762a solid 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem;

  @media screen and (min-width: 768px) {
    height: 390px;
    width: 260px;
  }
`;

const StyledProductImg = styled.img`
  width: 105px;
  height: 105px;
  @media screen and (min-width: 768px) {
    width: 192px;
    height: 192px;
  }
`;

const ProductTitle = styled.p`
  font-size: 18px;
  margin: 0;
  margin-top: 0.2rem;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 0.4rem;
  }
`;

const ProductPrice = styled.p`
  font-size: 12px;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const ProductText = styled.p`
  font-size: 10px;
  margin: 0;
  margin-top: 0.2rem;
  text-align: center;
  padding: 0.3rem;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 0.4rem;
    padding: 0.8rem;
  }
`;

function Card() {
  return (
    <CardWrapper>
      <StyledProductImg src="/produkt.png"></StyledProductImg>
      <ProductTitle>MINI</ProductTitle>
      <ProductPrice>750 KR</ProductPrice>
      <ProductText>
        Enfärgad ring gjord av sterlingsilver - fylld med resin. Ca 25 mm i
        diameter.
      </ProductText>
    </CardWrapper>
  );
}
export default Card;
