import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 180px;
  height: 70px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const Online = styled.span`
  display: block;
  margin-left: 10px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: green;
`;

export const Offline = styled.span`
  display: block;
  margin-left: 10px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: red;
`;

export const Image = styled.img`
  width: 48px;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
`;
