import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledNavbar = styled.nav`
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  align-self: center;
  width: 100vw;
  height: 8rem;
  padding: 1.5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: block;
    width: 700px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      cursor: pointer;
      margin: 0 1em;
      transition: all 200ms ease-in-out;
      font-size: 1.2rem;
      font-weight: 700;
      opacity: 0.5;
      &.active {
        color: var(--cl-primary);
        font-weight: 900;
        opacity: 1;
        font-size: 2rem;
      }
    }
  }
`;

type Props = {
  stage: number;
  handleStageClick: (stage: number) => void;
  handleScrambleClick: () => void;
  handleResetOrderClick: () => void;
};

function Navbar(props: Props) {
  return (
    <StyledNavbar>
      <ul>
        {[...Array(8)].map((_, i) => (
          <li
            key={i}
            className={`${i + 2 === props.stage ? 'active' : null}`}
            onClick={props.handleStageClick.bind(null, i + 2)}
          >
            {i + 2} 단
          </li>
        ))}
      </ul>
      <Button handleClick={props.handleScrambleClick}>섞어주세요!</Button>
      <Button outline={true} handleClick={props.handleResetOrderClick}>
        원래대로
      </Button>
    </StyledNavbar>
  );
}

export default Navbar;
