import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledNavbar = styled.nav`
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  align-self: center;
  width: 90%;
  max-width: 1400px;
  height: 5em;
  margin: 2em auto var(--y-spacer);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ul {
    min-width: 60%;
    display: block;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1 1 auto;
    li {
      cursor: pointer;
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
  .nav-buttons {
    display: flex;
    justify-content: center;
    margin: 0.5em 1rem;
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
      <div className="nav-buttons">
        <Button handleClick={props.handleScrambleClick}>섞어주세요!</Button>
        <Button outline={true} handleClick={props.handleResetOrderClick}>
          원래대로
        </Button>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
