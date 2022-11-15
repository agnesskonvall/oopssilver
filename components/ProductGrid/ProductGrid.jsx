import styled from "styled-components";
import React, { useState } from "react";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const ProductGrid = () => {
  return <GridWrapper></GridWrapper>;
};

export default ProductGrid;
