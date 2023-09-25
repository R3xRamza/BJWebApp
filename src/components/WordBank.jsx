import React from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

const StyledWord = styled.div`
  cursor: pointer;
  padding: 8px;
  margin: 4px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`;

const Word = ({ word }) => {
  const [, ref] = useDrag({
    type: 'WORD',
    item: { word },
  });

  return <StyledWord ref={ref}>{word}</StyledWord>;
};

const WordBank = ({ words }) => {
  return (
    <div>
      <h2>Word Bank</h2>
      <div>
        {words.map((word, index) => (
          <Word key={index} word={word} />
        ))}
      </div>
    </div>
  );
};

export default WordBank;
