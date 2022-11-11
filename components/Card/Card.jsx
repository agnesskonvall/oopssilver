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

function Card() {
  return (
    <div>
      <CardWrapper>
        <StyledProductImg>
          <Image src="/produkt.png" layout="fill"></Image>
        </StyledProductImg>
        <TextWrapper>
          <ProductTitle>MIDI</ProductTitle>
          <ProductPrice>750 KR</ProductPrice>
          <ProductText>
            Enfärgad ring gjord av sterlingsilver - fylld med resin.
          </ProductText>
          <ProductSize>
            Mått: Ca 25 mm i diameter. Justerbar ringstomme.
          </ProductSize>
        </TextWrapper>
      </CardWrapper>
      <CardWrapper>
        <StyledProductImg>
          <Image src="/produkt.png" layout="fill"></Image>
        </StyledProductImg>
        <TextWrapper>
          <ProductTitle>Oxiderade cirkelörhängen</ProductTitle>
          <ProductPrice>450kr/500kr/550kr</ProductPrice>
          <ProductText>
            Örhängen med stift gjorda av oxiderat sterlingsilver.
          </ProductText>
          <ProductSize>
            Mått: Välj mellan 13 mm, 17 mm, 20 mm. Justerbar ringstomme.
          </ProductSize>
        </TextWrapper>
      </CardWrapper>
      <CardWrapper>
        <StyledProductImg>
          <Image src="/produkt.png" layout="fill"></Image>
        </StyledProductImg>
        <TextWrapper>
          <ProductTitle>Assymetriska</ProductTitle>
          <ProductPrice>
            650kr/750kr/850kr/<br></br>950kr/1050kr
          </ProductPrice>
          <ProductText>
            Enfärgade assymetriska ringar gjorda av sterlingsilver - fyllda med
            resin.
          </ProductText>
          <ProductSize>
            Mått: Finns i storlekarna Mini, Midi, Maxi, Mega & OOmega.
          </ProductSize>
        </TextWrapper>
      </CardWrapper>
    </div>
  );
}
export default Card;
