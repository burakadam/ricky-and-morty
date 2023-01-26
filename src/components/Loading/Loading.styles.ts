import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeInAndOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100%{opacity:0}
`;

const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  animation: ${fadeInAndOut} 1.5s infinite;
`;

const Logo = styled('img')`
  height: 40px;
  width: auto;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export { Container, Logo };
