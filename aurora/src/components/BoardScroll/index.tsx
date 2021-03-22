import React from 'react';

import { Container } from './styles/sytles';

interface BoardPost {
  className ?: string;
}

const Board: React.FC<BoardPost>= ({ children, className }) => {

  return (
    <Container className={className}>
      {children}
    </Container>
  );
}

export default Board;