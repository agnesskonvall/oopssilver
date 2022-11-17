import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const CirclesWrapper = styled.div`
  width: 100%;
  height: 20rem;
  position: relative;
  /* overflow-x: hidden; */
`;

const CirclesWrapperDesktop = styled.div`
  position: relative;
  display: none;

  @media screen and (min-width: 992px) {
    width: 100vw;
    height: 200px;
    display: block;
  }
`;

const CirclesWrapperMobile = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: block;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
    width: 100vw;
    height: 200px;
    display: none;
  }
`;

function Circles() {
  return (
    <CirclesWrapper>
      <CirclesWrapperDesktop>
        <Image
          src="/circles.svg"
          layout="fill"
          alt="print of green circles"
        ></Image>
      </CirclesWrapperDesktop>
      <CirclesWrapperMobile>
        <Image
          src="/circles-mobile.svg"
          layout="fill"
          alt="print of green circles"
        ></Image>
      </CirclesWrapperMobile>
    </CirclesWrapper>
  );
}
export default Circles;
