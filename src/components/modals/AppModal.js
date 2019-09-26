import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Icon from '../navbar/Icon';
import { PlayerContext } from '../Context';

const StyledAppModal = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
  position: absolute;
  width: 90vw;
  height: 303px;
  left: 20px;
  top: 106px;
  padding: 43px;
  background-color: #282828;
  border-radius: 2px;
  z-index: 1;
  color: ${props => props.theme.colorLight};
  .first-paragraph {
    margin-bottom: 20px;
  }
  p {
    font: ${props => props.theme.fontMobilePsmall};
  }

  h1 {
    color: ${props => props.theme.orange};
    margin-bottom: 20px;
  }
  img {
    height: 15px;
    width: 15px;
    position: absolute;
    right: 30px;
    top: 30px;
  }
  button {
    position: relative;
    top: 60px;
    left: 90px;
    height: 40px;
    width: 100px;
    border-style: none;
    border-radius: 4px;
    color: ${props => props.theme.colorLight};
    background-color: ${props => props.theme.orange};
  }
`;

const AppModal = props => {
  const [display, toggleDisplay] = useState(true);
  return (
    <StyledAppModal {...props} display={display}>
      <Icon imgsrc="/assets/icons/cross.svg" />
      <h1>Hej!</h1>
      <div className="first-paragraph">
        <p>Du verkar gilla kulturplay, kul!</p>
      </div>
      <p>Ladda ner Kulturplay som app för smidig och enkel användning på mobilen.</p>
      <button onClick={() => toggleDisplay(false)}>
        <p>Okej</p>
      </button>
    </StyledAppModal>
  );
};

export default AppModal;
