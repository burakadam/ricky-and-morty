import styled from '@emotion/styled';

const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  > div {
    width: 50%;
    text-align: left;
    padding: 16px;
    margin-top: 0;
  }
  > div:nth-of-type(2n + 1) {
    text-align: right;
  }
`;

export { Container };
