import React from 'react';
import styled from 'styled-components';

import TimesItem from './TimesItem';

const StyledTimesTable = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  .quiz {
    display: grid;
    gap: 2em;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'one four seven'
      'two five eight'
      'three six nine';
  }
`;

type Props = {
  stage: number;
  gridAreas: string[];
};

function TimesTable(props: Props) {
  const items = Array.from({ length: 9 }, (_, i) => i + 1).map((v) => (
    <TimesItem
      key={props.gridAreas[v - 1]}
      gridArea={props.gridAreas[v - 1]}
      stage={props.stage}
      factor={v}
    />
  ));

  return (
    <StyledTimesTable className="main">
      <ul className="quiz">{items}</ul>
    </StyledTimesTable>
  );
}

export default TimesTable;
