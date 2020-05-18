import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTimesItem = styled.li<{ isPeeking: boolean; gridArea: string }>`
  grid-area: ${(props) => props.gridArea};
  font-size: 3rem;
  margin-bottom: 0.5em;
  text-align: right;
  justify-self: center;
  display: flex;
  align-items: center;
  .question {
    display: inline-block;
    width: 10.5rem;
    text-align: left;
  }
  .answer {
    --size: 5rem;
    display: inline-block;
    width: var(--size);
    height: var(--size);
    position: relative;
    text-align: center;
    &::before {
      content: '?';
      display: grid;
      place-items: center;
      position: absolute;
      background: var(--cl-primary);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: white;
      animation: ${(props) =>
        props.isPeeking ? 'show-answer 1s linear' : null};
      @keyframes show-answer {
        100% {
          transform: rotate3d(0, 1, 0, 360deg);
        }
      }
    }
  }
`;

type Props = {
  gridArea: string;
  stage: number;
  factor: number;
};

function TimesItem(props: Props) {
  const [isPeeking, setIsPeeking] = useState(false);
  const handleAnswerAnimationEnd = () => {
    setIsPeeking(false);
  };
  const handlePeekClick = () => {
    setIsPeeking(true);
  };

  return (
    <StyledTimesItem isPeeking={isPeeking} gridArea={props.gridArea}>
      <div className="question">
        {props.stage} <span className="times">X</span> {props.factor} ={' '}
      </div>
      <span
        className="answer"
        onClick={handlePeekClick}
        onAnimationEnd={handleAnswerAnimationEnd}
      >
        {props.stage * props.factor}
      </span>
    </StyledTimesItem>
  );
}

export default TimesItem;
