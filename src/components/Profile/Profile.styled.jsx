import styled from '@emotion/styled';

export const Card = styled.div`
  text-align: center;
  padding-top: 20px;
  width: 350px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const Description = styled.div``;

export const Image = styled.img`
  width: 60%;
`;
export const Name = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;
export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 500;
  color: gray;
`;
export const Location = styled.p`
  margin-top: 0;
  margin-bottom: 30px;
  font-weight: 500;
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  margin: 0;
  padding: 0;
  height: 60px;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 33.33%;
  border-top: 1px solid gray;
  :not(:last-child) {
    border-right: 1px solid gray;
  }
  /* border: 1px solid gray; */
`;
export const Label = styled.span`
  font-weight: 400;
`;
export const Quantity = styled.span`
  font-weight: 700;
`;
