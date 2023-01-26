import styled from '@emotion/styled';

const Container = styled('div')`
  width: 210px;
  > button {
    display: none;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    > h5 {
      display: none;
    }
    > button {
      display: block;
      width: 100%;
      margin-bottom: 16px;
    }
  }
`;

const Form = styled('div')`
  @media screen and (max-width: 600px) {
    max-height: 0;
    overflow: hidden;
    transition: max-height 300ms ease-in-out;

    &.filter-open {
      max-height: 460px;
    }
  }
`;

const FilterRow = styled('div')`
  margin-bottom: 16px;
  > * {
    width: 100%;
  }
`;

export { Container, FilterRow, Form };
