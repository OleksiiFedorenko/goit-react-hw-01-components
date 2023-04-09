import styled from '@emotion/styled';

export const Card = styled.section`
  text-align: center;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  height: 60px;

  padding: 0;
  margin: 0;

  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80px;
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 22px;
  font-weight: 500;
`;
