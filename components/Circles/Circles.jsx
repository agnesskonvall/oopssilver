import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const CirclesWrapper = styled.div`
  width: 100%;
  height: 5rem;
  position: relative;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    height: 15rem;
  }
`;

const CirclesWrapperDesktop = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  /* display: none; */

  @media screen and (min-width: 992px) {
    width: 100vw;
    height: 200px;
    /* display: block; */
  }
`;

const CirclesWrapperMobile = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  display: block;

  @media screen and (min-width: 992px) {
    /* display: none; */
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
      {/* <CirclesWrapperMobile>
        <Image
          src="/circles-mobile.svg"
          layout="fill"
          alt="print of green circles"
        ></Image>
      </CirclesWrapperMobile> */}
    </CirclesWrapper>
  );
}
export default Circles;
