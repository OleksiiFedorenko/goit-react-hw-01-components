import styled from '@emotion/styled';

export const BodyRow = styled.tr`
  :nth-of-type(2n) {
    background-color: #e9f1f8;
  }

  :last-of-type {
    td {
      border-bottom: none;
    }

    td:first-of-type {
      border-bottom-left-radius: 4px;
    }

    td:last-of-type {
      border-bottom-right-radius: 4px;
    }
  }
`;

export const BodyCell = styled.td`
  text-align: center;
  padding: 10px;
  border: 1px solid #9c9c9c;

  :first-of-type {
    text-transform: capitalize;
    border-left: none;
  }

  :last-of-type {
    border-right: none;
  }
`;
