import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const CirclesWrapper = styled.div`
  width: 100%;
  height: 20rem;
  position: relative;
`;

function Circles() {
  return (
    <CirclesWrapper>
      <Image
        src="/circles.svg"
        layout="fill"
        alt="print of green circles"
      ></Image>
    </CirclesWrapper>
  );
}
export default Circles;
