import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTimesItem = styled.li<{ isPeeking: boolean }>`
  font-size: 3rem;

  text-align: right;
  display: flex;
  align-items: center;
  .question {
    display: inline-block;
    width: 10.5rem;
    text-align: left;
  }
  /* TODO - improve button design? (fix default background?) */
  .answer {
    cursor: pointer;
    border: none;
    background: var(--cl-light);
    --size: 5rem;
    font: inherit;
    display: inline-block;
    width: var(--size);
    height: var(--size);
    position: relative;
    text-align: center;
    &::before {
      content: '?';
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      background: var(--cl-primary);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: white;
      animation: ${(props) =>
        props.isPeeking ? 'show-answer 0.8s ease-out' : null};
      @keyframes show-answer {
        100% {
          opacity: 1;
          transform: rotate3d(0, 1, 0, 360deg);
        }
      }
      /* for iPhone7 */
      @supports not (transform: rotate3d(0, 1, 0, 360deg)) {
        @keyframes show-answer {
          50% {
            opacity: 0.4;
          }
        }
      }
    }
  }
`;

type Props = {
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
    <StyledTimesItem isPeeking={isPeeking}>
      <div className="question">
        {props.stage} <span className="times">X</span> {props.factor} ={' '}
      </div>
      <button
        className="answer"
        onClick={handlePeekClick}
        onAnimationEnd={handleAnswerAnimationEnd}
      >
        {props.stage * props.factor}
      </button>
    </StyledTimesItem>
  );
}

export default TimesItem;
