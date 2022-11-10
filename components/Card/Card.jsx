import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardWrapper = styled.div`
  height: 260px;
  width: 170px;
  background-color: beige;
  border: #15762a solid 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem;
  font-family: "RedHatDisplay";

  @media screen and (min-width: 768px) {
    height: 430px;
    width: 270px;
  }
`;

const TextWrapper = styled.div`
  height: 40%;

  @media screen and (min-width: 768px) {
    height: 40%;
  }
`;

const StyledProductImg = styled.div`
  width: 105px;
  height: 105px;
  position: relative;
  /* margin: 1rem; */
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const ProductTitle = styled.p`
  font-size: 16px;
  margin: 0;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const ProductPrice = styled.p`
  font-size: 10px;
  margin: 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const ProductText = styled.p`
  font-size: 10px;
  margin: 0;
  margin-top: 0.2rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 1rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    margin: 0;
  }
`;

const ProductSize = styled.div`
  font-size: 10px;
  text-align: center;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

function Card({ necklace }) {
  const { picture, title, price, productText, productSize } = necklace.fields;
  return (
    <div>
      <CardWrapper>
        <StyledProductImg>
          <Image
            src={"https:" + picture.fields.file.url}
            width={picture.fields.file.details.image.widht}
            height={picture.fields.file.details.image.height}
            layout="fill"
          ></Image>
        </StyledProductImg>
        <TextWrapper>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{price}</ProductPrice>
          <ProductText>{productText}</ProductText>
          <ProductSize> {productSize}</ProductSize>
        </TextWrapper>
      </CardWrapper>
    </div>
  );
}
export default Card;
