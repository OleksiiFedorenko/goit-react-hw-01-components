import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* width: 80px; */
`;

export const Online = styled.span`
  width: 100px;
  heigth: 100px;
  border-radius: 50%;
  background-color: green;
`;

export const Offline = styled.span`
  width: 10px;
  heigth: 10px;
  border-radius: 50%;
  background-color: red;
`;

export const Name = styled.p`
  font-size: 14px;
`;
