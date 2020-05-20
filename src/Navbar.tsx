import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledNavbar = styled.nav`
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  align-self: center;
  width: 90%;
  max-width: 1400px;
  margin: 2em auto var(--y-spacer);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ul {
    min-width: 60%;
    height: 5rem;
    display: block;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1 1 auto;
    li {
      width: 100%;
      height: 100%;
      padding: 0.5em 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: 700;
      button {
        font: inherit;
        border: none;
        background: transparent;
        opacity: 0.6;
        transition: all 200ms ease-in-out;
        /* accessible focus styling for nav-link button */
        &:focus {
          outline: none;
          border-bottom: 2px solid rgba(0, 0, 0, 0.3);
        }
      }
      &.active {
        button {
          color: var(--cl-primary);
          font-weight: 900;
          opacity: 1;
          font-size: 2rem;
          /* remove focus style since selected link already has a visual cue */
          border-bottom: none;
          &:not(:focus) {
            opacity: 0.8;
          }
        }
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
            <button>{i + 2} 단</button>
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
