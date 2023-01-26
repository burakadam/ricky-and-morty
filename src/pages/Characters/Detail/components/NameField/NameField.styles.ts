import styled from '@emotion/styled';

const Container = styled('div')`
  margin-top: 10px;
  span {
    background-color: #000;
    color: #64bc46;
    padding: 4px 8px;
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    span {
      font-size: 0.8rem;
    }
  }
`;

export { Container };
