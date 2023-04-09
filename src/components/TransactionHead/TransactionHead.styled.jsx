import styled from '@emotion/styled';

export const HeadCRow = styled.tr`
  color: #fff;
  background-color: #167eda;
`;

export const HeadCell = styled.th`
  width: 150px;
  padding: 10px;
  border-left: 1px solid #9c9c9c;

  :first-of-type {
    border-top-left-radius: 4px;
    border-left: none;
  }

  :last-of-type {
    border-top-right-radius: 4px;
  }
`;
