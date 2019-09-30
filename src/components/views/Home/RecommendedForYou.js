import React from 'react';
import styled from 'styled-components';

const StyledRecommendedForYou = styled.div`
  h5 {
    margin-bottom: 10px;
  }
  img {
    height: auto;
    width: 100%;
  }
  div {
    padding-top: 10px;

    font: ${props => props.theme.fontMobilePsmall};
  }
`;
const RecommendedForYou = props => {
  return (
    <StyledRecommendedForYou>
      <h5>Rekommenderat för dig</h5>
      <img src="./assets/images/home-image.jpg" alt="" />
      <div>
        <p>Using an agile workstructure with the help of...</p>
      </div>
    </StyledRecommendedForYou>
  );
};

export default RecommendedForYou;
