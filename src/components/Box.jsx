import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';

const StyledBox = styled.div`
  width: 300px;
  height: 200px;
  background-color: #e0e0e0;
  border: 2px dashed #ccc;
`;

const Box = ({ onDrop }) => {
  const [, ref] = useDrop({
    accept: 'WORD',
    drop: (item) => {
      onDrop(item.word);
    },
  });

  return <StyledBox ref={ref}>Drop words here</StyledBox>;
};

export default Box;
